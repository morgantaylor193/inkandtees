export interface INavigation {
  leftNav: Array<INavItem>,
  rightNav: Array<INavItem>,
  logoNav: {
    url: string,
    logoUrl: string,
    logoSmallUrl:string,
    altText: string
  }
}

export interface INavItem {
  url: string,
  label: string
}

export interface IApparelBrand {
  id: string,
  name: string,
  logo: string,
  description: string
}