import { atom } from 'recoil';

const contactAtom = atom({
  key: 'contactAtom',
  default: null
});

const aboutAtom = atom({
  key: 'aboutAtom',
  default: null
});

const projectsAtom = atom({
  key: 'projectsAtom',
  default: null
});

const stacksAtom = atom({
  key: 'stacksAtom',
  default: null
});

export { contactAtom, aboutAtom, projectsAtom, stacksAtom };