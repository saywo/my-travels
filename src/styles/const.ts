const mediaDeclaration = '@media screen and'
const breakPoint = {
  sm: 480,
  md: 768,
  lg: 1024,
}
export const mediaQuery = {
  sm: `${mediaDeclaration} (maz-width: ${breakPoint.sm}px)`,
  md: `${mediaDeclaration} (max-width: ${breakPoint.md}px)`,
  lg: `${mediaDeclaration} (max-width: ${breakPoint.lg}px)`,
}