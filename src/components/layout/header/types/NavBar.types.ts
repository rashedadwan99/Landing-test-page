export type HeaderLink {
  name: string;
  href: string;
}
export type RightSideProps {
  AlphaWhiteHeader: boolean;
}
export type MobileHeaderProps {
  // setShowMobile: React.Dispatch<React.SetStateAction<boolean>>;
  setShowMobile: () => void;
  showMobile: boolean;
}
