export interface Employe {
    id: number
    aclUserId: any
    comSubsidiariesId: number
    warWarehousesId: number
    salTerminalsId: number
    name: string
    lastname: string
    email: string
    urlImage: string
    codeTypeRol: any
    flagAdmin: number
    aclUserCode: string
    code: string
    roleId: number
    specialty: any
    level: string
    phone: string
    tokenDevice: any
    configFilters: ConfigFilters
    flagActive: number
    personId: number
    flagTypePerson: number
    documentNumber: any
    companyId: number
    cashId: number
    flagDisplayStock: number
    company: Company
    subsidiary: Subsidiary
    terminal: Terminal
    cash: Cash
    dataSellers: any
    delivery: any
    salPriceList: SalPriceList
    fullname: string
    autocomplete: string
    warehouse: Warehouse
    roleCode: string
    roleConfig: RoleConfig
    roleCompanyCode: string
  }
  
  export interface ConfigFilters {
    sales: Sales
    products: Products
    commerces: Commerces
    transfers: Transfers
    warehouses: Warehouses4
    subsidiaries: Subsidiaries4
  }
  
  export interface Sales {
    warehouses: Warehouses
    subsidiaries: Subsidiaries
  }
  
  export interface Warehouses {
    values: any[]
    fieldName: string
    tableName: string
  }
  
  export interface Subsidiaries {
    values: any[]
    fieldName: string
    tableName: string
  }
  
  export interface Products {
    warehouses: Warehouses2
  }
  
  export interface Warehouses2 {
    values: any[]
    fieldName: string
  }
  
  export interface Commerces {
    commerces: Commerces2
    subsidiaries: Subsidiaries2
  }
  
  export interface Commerces2 {
    values: any[]
    fieldName: string
  }
  
  export interface Subsidiaries2 {
    values: any[]
    fieldName: string
  }
  
  export interface Transfers {
    warehouses: Warehouses3
  }
  
  export interface Warehouses3 {
    values: any[]
    fieldName: string
    tableName: string
  }
  
  export interface Warehouses4 {
    warehouses: Warehouses5
    subsidiaries: Subsidiaries3
  }
  
  export interface Warehouses5 {
    values: any[]
    fieldName: string
  }
  
  export interface Subsidiaries3 {
    values: any[]
    fieldName: string
  }
  
  export interface Subsidiaries4 {
    subsidiaries: Subsidiaries5
  }
  
  export interface Subsidiaries5 {
    values: any[]
    fieldName: string
  }
  
  export interface Company {
    address: string
    code: string
    comItemId: number
    companyName: string
    companyRzSocial: string
    convertWeightTo: string
    id: number
    flagBarcodeReader: number
    flagIgv: number
    flagUpdatePrice: number
    logo: string
    settings: Settings
    theme: Theme
    urlImage: any[]
    weight: string
    credential: any
    ruc: string
    email: string
    phone: string
    currency: string
    aclId: any
    commerceCode: any
    aclCode: string
    comCountryId: number
    companyId: any
    banners: any[]
    socialMedia: any
    templateCode: any
    colorCode: any
    flagTest: number
    configIntegration: any
    flagMaster: any
    plans: any
    flagLoyalti: number
    additionalInformation: any
    country: Country
    currencies: Currency[]
    item: Item
    currencyDefault: CurrencyDefault
    salPriceListDefault: SalPriceListDefault
    commerceSubsidiaries: CommerceSubsidiary[]
  }
  
  export interface Settings {
    mpos: boolean
    bucket: string
    flagTip: boolean
    flagCodes: boolean
    flagImport: boolean
    flagConvers: boolean
    flagGrouper: boolean
    autoDispatch: boolean
    deliveryZone: DeliveryZone
    distanceMode: number
    downloadSale: boolean
    deliveryZones: DeliveryZone2[]
    domainCatalog: string
    flagQuotation: boolean
    priceDelivery: PriceDelivery[]
    stockNegative: boolean
    typePriceShown: number
    bucketSaleError: string
    flagKardexValued: boolean
    flagSyncExternal: boolean
    flagCatEcomFather: boolean
    flagCategoryPrice: boolean
    flagNotGenericNtc: boolean
    flagShowPhoneDrive: boolean
    flagShowVariations: boolean
    flagCodeProductAuto: boolean
    flagShowSlugProduct: boolean
    flagTransferDefault: boolean
    flagTransferDisplay: boolean
    freeCourierSettings: FreeCourierSettings
    digitCorrelativeSale: number
    flagBasePriceDefault: number
    flagShowPhoneCommerce: boolean
    flagEmployeeTransaction: boolean
    flagCurrierDeliveryReady: boolean
    flagGenericSalesCustomer: boolean
    flagTypeIntegrationGrouper: boolean
    flagWholesaleVariationGroup: boolean
    flagStockDiscountSaleTransfer: boolean
    typeProductsCreationPermission: number[]
  }
  
  export interface DeliveryZone {
    length: number
    polygon: Polygon[]
    orderType: number
  }
  
  export interface Polygon {
    lat: number
    lng: number
    order: number
  }
  
  export interface DeliveryZone2 {
    length: number
    polygon: Polygon2[]
    orderType: number
  }
  
  export interface Polygon2 {
    lat: number
    lng: number
    order: number
  }
  
  export interface PriceDelivery {
    to: number
    from: number
    price: number
    typeOrder: number
  }
  
  export interface FreeCourierSettings {
    showFlagCollectForYou: boolean
    additionalCostPercentage: number
    showFlagImmediateDelivery: boolean
  }
  
  export interface Theme {
    info: string
    pink: string
    error: string
    accent: string
    primary: string
    success: string
    warning: string
    secondary: string
  }
  
  export interface Country {
    id: number
    name: string
    countryCode: string
    taxName: string
    urlImage: string
    taxSize: any
    configSupplier: any
    configTaxes: ConfigTaxes
    productsTaxes: ProductsTaxes
    descriptionTax: string
    percentage: number
    currency: string
  }
  
  export interface ConfigTaxes {
    FACT: Fact
    countryCodeISO3166: string
    digitCorrelativeSale: number
  }
  
  export interface Fact {
    RA: Ra[]
  }
  
  export interface Ra {
    code: string
    term: number
    format: string
    dateValid: DateValid
    flagInformed: boolean
  }
  
  export interface DateValid {
    informed: string
  }
  
  export interface ProductsTaxes {
    default: Default
  }
  
  export interface Default {
    code: string
    name: string
    codeTable: string
    codePercentage: string
  }
  
  export interface Currency {
    currencyId: string
    flagDefault: any
  }
  
  export interface Item {
    id: number
    name: string
    code: any
    dataState: DataState
    additionalInformation: any
    type: number
    urlImage: any
    urlIcon: any
    companyId: any
    totalCommerce: number
  }
  
  export interface DataState {
    BOL: Bol
    COT: Cot
    FAC: Fac
    NTV: Ntv
  }
  
  export interface Bol {
    transitions: Transition[]
  }
  
  export interface Transition {
    to: string
    from: string
    name: string
  }
  
  export interface Cot {
    transitions: Transition2[]
  }
  
  export interface Transition2 {
    to: string
    from: string
    name: string
  }
  
  export interface Fac {
    transitions: Transition3[]
  }
  
  export interface Transition3 {
    to: string
    from: string
    name: string
  }
  
  export interface Ntv {
    transitions: Transition4[]
  }
  
  export interface Transition4 {
    to: string
    from: string
    name: string
  }
  
  export interface CurrencyDefault {
    id: string
    name: string
    code: string
    symbol: string
  }
  
  export interface SalPriceListDefault {
    id: number
    warWarehousesId: any
    comEmployeeId: any
    comCustomersId: any
    name: string
    description: string
    flagDefault: number
    flagActive: number
  }
  
  export interface CommerceSubsidiary {
    warehousesRelated: number[]
    subsidiaryId: number
    subsidiaryAclCode: string
    ruc: string
    rucName: string
  }
  
  export interface Subsidiary {
    id: number
    sucursalName: string
    location: Location
    ubigeo: string
    sucursalCode: string
    phone: string
    address: string
    departmentId: any
    provinceId: any
    districtId: any
    contactName: string
    contactLastname: string
    email: string
    urlImage: string
    websiteDescription: string
    ruc: string
    rzSocial: string
    flagTaxes: number
    typeAmbientTax: number
    flagCreditDispatch: number
    debtsSales: DebtsSales
    specialContributor: any
    flagAccount: number
    rise: any
    settings: Settings2
    flagAccountingEngine: number
    flagAccountingAutomatic: number
    urlLogo: any
    companyId: number
    subsidiaryId: any
    distributorCustomerId: any
    flagIntegrations: number
    subsidiaryAclCode: string
    configIntegrations: ConfigIntegrations
    flagCompanyDefault: number
    rucName: string
  }
  
  export interface Location {
    x: number
    y: number
  }
  
  export interface DebtsSales {
    USD: number
  }
  
  export interface Settings2 {
    allowProductFree: boolean
    additionalInformation: AdditionalInformation[]
  }
  
  export interface AdditionalInformation {
    label: string
    value: string
  }
  
  export interface ConfigIntegrations {
    centerCost: CenterCost
    accountingPlan: AccountingPlan
    accountingConfiguration: AccountingConfiguration
  }
  
  export interface CenterCost {
    data: any[]
    flagActive: boolean
  }
  
  export interface AccountingPlan {
    uploadPlan: boolean
  }
  
  export interface AccountingConfiguration {
    data: Daum[]
  }
  
  export interface Daum {
    code: string
    name: string
    flagActive: boolean
    accountingAutomatic: boolean
  }
  
  export interface Terminal {
    id: number
    comSubsidiariesId: number
    warWarehousesId: number
    warWarehousesName: string
    salTypeTerminalsId: any
    typeTerminal: any
    name: string
    description: any
    code: any
    sunatCode: any
    printCode: any
    ruc: any
    cashId: number
    authorizationDate: any
    codeTaxes: any
    flagActive: number
    flagEcommerce: number
    typeDevice: any
    sessionStatusId: number
    commerceId: any
    sessionStatusName: string
  }
  
  export interface Cash {
    id: number
    code: string
    name: string
    description: string
    account: any
    type: string
    warWarehousesId: number
    terminalId: any
    flagGeneral: number
    balance: Balance
    state: State
    flagControl: any
    accountingAccount: any
    createdAt: string
    flagActive: number
    subsidiaryId: number
  }
  
  export interface Balance {
    PEN: number
    USD: number
  }
  
  export interface State {
    USD: number
  }
  
  export interface SalPriceList {
    id: number
    warWarehousesId: any
    comEmployeeId: any
    comCustomersId: any
    name: string
    description: string
    flagDefault: number
    flagActive: number
  }
  
  export interface Warehouse {
    id: number
    name: string
    code: string
    subsidiaryId: number
    externalCode: any
    codeTaxes: string
    address: string
    isMain: number
    phone: any
    longitude: any
    latitude: any
    settings: Settings3
    companyId: number
    flagEcommerce: number
    flagActive: number
    createdAt: string
    updatedAt: string
    location: Location2
    subsidiary: Subsidiary2
  }
  
  export interface Settings3 {
    color: string
  }
  
  export interface Location2 {
    x: number
    y: number
  }
  
  export interface Subsidiary2 {
    id: number
    sucursalName: string
    location: Location3
    ubigeo: string
    sucursalCode: string
    phone: string
    address: string
    departmentId: any
    provinceId: any
    districtId: any
    contactName: string
    contactLastname: string
    email: string
    urlImage: string
    websiteDescription: string
    ruc: string
    rzSocial: string
    flagTaxes: number
    typeAmbientTax: number
    flagCreditDispatch: number
    debtsSales: DebtsSales2
    specialContributor: any
    flagAccount: number
    rise: any
    settings: Settings4
    flagAccountingEngine: number
    flagAccountingAutomatic: number
    urlLogo: any
    companyId: number
    subsidiaryId: any
    distributorCustomerId: any
    flagIntegrations: number
    subsidiaryAclCode: string
    configIntegrations: ConfigIntegrations2
    flagCompanyDefault: number
    rucName: string
  }
  
  export interface Location3 {
    x: number
    y: number
  }
  
  export interface DebtsSales2 {
    USD: number
  }
  
  export interface Settings4 {
    allowProductFree: boolean
    additionalInformation: AdditionalInformation2[]
  }
  
  export interface AdditionalInformation2 {
    label: string
    value: string
  }
  
  export interface ConfigIntegrations2 {
    centerCost: CenterCost2
    accountingPlan: AccountingPlan2
    accountingConfiguration: AccountingConfiguration2
  }
  
  export interface CenterCost2 {
    data: any[]
    flagActive: boolean
  }
  
  export interface AccountingPlan2 {
    uploadPlan: boolean
  }
  
  export interface AccountingConfiguration2 {
    data: Daum2[]
  }
  
  export interface Daum2 {
    code: string
    name: string
    flagActive: boolean
    accountingAutomatic: boolean
  }
  
  export interface RoleConfig {
    data: Data
    validations: Validations
  }
  
  export interface Data {
    configFields: ConfigFields
    creationAllowed: string[]
  }
  
  export interface ConfigFields {
    cashBox: boolean
    terminals: boolean
    warehouse: boolean
  }
  
  export interface Validations {
    allowSales: boolean
    simultaneity: boolean
    allowChangeRoles: boolean
    skipDeviceValidation: boolean
  }
  