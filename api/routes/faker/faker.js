const faker = require("faker");

exports.FakerData = () => {
  const randomName = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    findName: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    prefix: faker.name.prefix(),
    suffix: faker.name.suffix(),
    title: faker.name.title(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobArea: faker.name.jobArea(),
    jobType: faker.name.jobType()
  };

  const randomAddress = {
    zipCode: faker.address.zipCode(),
    city: faker.address.city(),
    cityPrefix: faker.address.cityPrefix(),
    citySuffix: faker.address.citySuffix(),
    streetName: faker.address.streetName(),
    streetAddress: faker.address.streetAddress(),
    streetSuffix: faker.address.streetSuffix(),
    streetPrefix: faker.address.streetPrefix(),
    secondaryAddress: faker.address.secondaryAddress(),
    county: faker.address.county(),
    country: faker.address.country(),
    countryCode: faker.address.countryCode(),
    state: faker.address.state(),
    stateAbbr: faker.address.stateAbbr(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude()
  };

  const randomCommerce = {
    color: faker.commerce.color(),
    department: faker.commerce.department(),
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    productAdjective: faker.commerce.productAdjective(),
    productMaterial: faker.commerce.productMaterial(),
    product: faker.commerce.product()
  };

  const randomCompany = {
    suffixes: faker.company.suffixes(),
    companyName: faker.company.companyName(),
    companySuffix: faker.company.companySuffix(),
    catchPhrase: faker.company.catchPhrase(),
    bs: faker.company.bs(),
    catchPhraseAdjective: faker.company.catchPhraseAdjective(),
    catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
    catchPhraseNoun: faker.company.catchPhraseNoun(),
    bsAdjective: faker.company.bsAdjective(),
    bsBuzz: faker.company.bsBuzz(),
    bsNoun: faker.company.bsNoun()
  };

  const randomDatabase = {
    column: faker.database.column(),
    type: faker.database.type(),
    collation: faker.database.collation(),
    engine: faker.database.engine()
  };

  const randomDate = {
    past: faker.date.past(),
    future: faker.date.future(),
    recent: faker.date.recent(),
    month: faker.date.month(),
    weekday: faker.date.weekday()
  };

  const randomFinance = {
    account: faker.finance.account(),
    accountName: faker.finance.accountName(),
    mask: faker.finance.mask(),
    amount: faker.finance.amount(),
    transactionType: faker.finance.transactionType(),
    currencyCode: faker.finance.currencyCode(),
    currencyName: faker.finance.currencyName(),
    currencySymbol: faker.finance.currencySymbol(),
    iban: faker.finance.iban(),
    bic: faker.finance.bic()
  };

  const randomHacker = {
    abbreviation: faker.hacker.abbreviation(),
    adjective: faker.hacker.adjective(),
    noun: faker.hacker.noun(),
    verb: faker.hacker.verb(),
    ingverb: faker.hacker.ingverb(),
    phrase: faker.hacker.phrase()
  };

  const randomInternet = {
    avatar: faker.internet.avatar(),
    email: faker.internet.email(),
    exampleEmail: faker.internet.exampleEmail(),
    userName: faker.internet.userName(),
    protocol: faker.internet.protocol(),
    url: faker.internet.url(),
    domainName: faker.internet.domainName(),
    domainSuffix: faker.internet.domainSuffix(),
    domainWord: faker.internet.domainWord(),
    ip: faker.internet.ip(),
    ipv6: faker.internet.ipv6(),
    userAgent: faker.internet.userAgent(),
    color: faker.internet.color(),
    mac: faker.internet.mac(),
    password: faker.internet.password(10)
  };

  const randomCard = {
    createCard: faker.helpers.userCard()
  };

  const randomImage = {
    image: faker.image.image(),
    avatar: faker.image.avatar(),
    imageUrl: faker.image.imageUrl(),
    abstract: faker.image.abstract(),
    animals: faker.image.animals(),
    business: faker.image.business(),
    cats: faker.image.cats(),
    city: faker.image.city(),
    food: faker.image.food(),
    nightlife: faker.image.nightlife(),
    fashion: faker.image.fashion(),
    people: faker.image.people(),
    nature: faker.image.nature(),
    sports: faker.image.sports(),
    technics: faker.image.technics(),
    transport: faker.image.transport(),
    dataUri: faker.image.dataUri()
  };

  const randomPhone = {
    phoneNumber: faker.phone.phoneNumber(),
    phoneNumberFormat: faker.phone.phoneNumberFormat(),
    phoneFormats: faker.phone.phoneFormats()
  };

  const randomLorem = {
    word: faker.lorem.word(),
    words: faker.lorem.words(),
    sentence: faker.lorem.sentence(),
    slug: faker.lorem.slug(),
    sentences: faker.lorem.sentences(),
    paragraph: faker.lorem.paragraph(),
    paragraphs: faker.lorem.paragraphs(),
    text: faker.lorem.text(),
    lines: faker.lorem.lines()
  };

  /**
   * return json
   */

  const data = {
    name: randomName,
    address: randomAddress,
    commerce: randomCommerce,
    company: randomCompany,
    database: randomDatabase,
    date: randomDate,
    finance: randomFinance,
    hacker: randomHacker,
    card: randomCard,
    image: randomImage,
    phone: randomPhone,
    internet: randomInternet,
    lorem: randomLorem
  };

  return data;
};
