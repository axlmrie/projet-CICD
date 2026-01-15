import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Portfolio Application', () => {

  // 1. TEST GLOBAL & NAVIGATION
  it('affiche la barre de navigation et le logo', () => {
    render(<App />);
    expect(screen.getByText('PORTFOLIO.')).toBeInTheDocument();
    expect(screen.getByText('Stack')).toBeInTheDocument();
  });

  // 2. TEST SECTION HERO (HOME)
  it('affiche les informations personnelles dans la section Hero', () => {
    render(<App />);
    
    // CORRECTION : On utilise getAllByText car le nom apparaît aussi dans le footer
    // On vérifie juste qu'il y en a au moins un
    const names = screen.getAllByText(/Alexandre Dev/i);
    expect(names.length).toBeGreaterThan(0);
    expect(names[0]).toBeInTheDocument();

    expect(screen.getByText(/Creative Developer/i)).toBeInTheDocument();
  });

  // 3. TEST SECTION STACK
  it('affiche la liste des compétences techniques', () => {
    render(<App />);
    expect(screen.getByText('Ma Stack Technique')).toBeInTheDocument();

    // CORRECTION : "React" apparait plusieurs fois (Stack + Projets), donc on utilise getAllByText
    const reactElements = screen.getAllByText('React');
    expect(reactElements.length).toBeGreaterThan(0);

    // Pour "Git", s'il n'apparait qu'une fois, getByText suffit, mais getAll est plus sûr
    const gitElements = screen.getAllByText('Git');
    expect(gitElements.length).toBeGreaterThan(0);
  });

  // 4. TEST D'INTERACTION (CAROUSEL) AVEC WAITFOR
  it('change de projet quand on clique sur le bouton "Suivant"', async () => {
    render(<App />);

    // État initial
    expect(screen.getByText('E-Commerce Dashboard')).toBeInTheDocument();
    
    // On cherche le bouton "Suivant" (le 2ème bouton de la page)
    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[1]; 

    // Action : Clic
    fireEvent.click(nextButton);

    // CORRECTION : On utilise waitFor pour attendre que React fasse la mise à jour
    await waitFor(() => {
      expect(screen.getByText('Social Media App')).toBeInTheDocument();
    });
  });

  // 5. TEST FOOTER
  it('affiche le footer', () => {
    render(<App />);
    expect(screen.getByText(/Tous droits réservés/i)).toBeInTheDocument();
  });

});