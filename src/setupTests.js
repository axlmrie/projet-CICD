import '@testing-library/jest-dom';

// --- MOCK pour Framer Motion ---
// On simule l'IntersectionObserver car jsdom ne l'a pas nativement
const IntersectionObserverMock = function () {
  return {
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  };
};

window.IntersectionObserver = IntersectionObserverMock;

// On simule aussi ResizeObserver (souvent utilisé par Framer aussi)
window.ResizeObserver = function () {
  return {
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  };
};

// On simule matchMedia (pour le responsive)
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};