import React, { createContext, useContext, useState, useEffect } from 'react';

interface Domain {
  id: string;
  name: string;
  icon?: string;
}

interface DomainContextType {
  currentDomain: Domain | null;
  setCurrentDomain: (domain: Domain) => void;
  updateDomainName: (name: string) => void;
  domains: Domain[];
  isLoading: boolean;
}

const DomainContext = createContext<DomainContextType | undefined>(undefined);

export function DomainProvider({ children }: { children: React.ReactNode }) {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [currentDomain, setCurrentDomain] = useState<Domain | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const response = await fetch('/api/supabase', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'getDomains' })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error);

        const domains = data.domains || [];
        setDomains(domains);
        
        // Set the first domain as current if none is selected
        if (domains.length > 0 && !currentDomain) {
          const savedDomainId = localStorage.getItem('selectedDomainId');
          const savedDomain = savedDomainId 
            ? domains.find(d => d.id === savedDomainId)
            : domains[0];
          setCurrentDomain(savedDomain || domains[0]);
        }
      } catch (error) {
        console.error('Error fetching domains:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDomains();
  }, []);

  useEffect(() => {
    if (currentDomain) {
      localStorage.setItem('selectedDomainId', currentDomain.id);
    }
  }, [currentDomain]);

  const updateDomainName = async (name: string) => {
    if (!currentDomain) return;

    try {
      const response = await fetch('/api/supabase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updateDomain',
          payload: {
            id: currentDomain.id,
            name
          }
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      const updatedDomain = data.domain;
      setCurrentDomain(prev => prev ? { ...prev, name: updatedDomain.name } : null);
      setDomains(prev => 
        prev.map(domain => 
          domain.id === currentDomain.id 
            ? { ...domain, name: updatedDomain.name }
            : domain
        )
      );
    } catch (error) {
      console.error('Error updating domain name:', error);
    }
  };

  return (
    <DomainContext.Provider value={{ 
      currentDomain, 
      setCurrentDomain, 
      updateDomainName,
      domains,
      isLoading
    }}>
      {children}
    </DomainContext.Provider>
  );
}

export function useDomain() {
  const context = useContext(DomainContext);
  if (context === undefined) {
    throw new Error('useDomain must be used within a DomainProvider');
  }
  return context;
}