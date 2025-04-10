export type Property = {
    id: string,
    shortDescription: string,
    propertyId: string,
    description: string,
    price: number,
    city: string,
    zip: number,
    area: string,
    balconySize: number | null,
    orientation: string,
    district: string,
    neighborhood: string,
    street: string,
    transactionType: string,
    propertyType: string,
    propertyBuildType: string,
    floorArea: number,
    rooms: number,
    yearOfConstruction: number,
    ownership: string,
    moveInDate: string,
    conditions: string,
    comfort: string,
    attic: string,
    floorsInBuilding: number,
    floor: number,
    elevator: string,
    heating: string,
    height: number,
    bathroomAndToilet: string,
    balcony: string,
    terrace: number,
    accessible: string,
    gardenAccess: string,
    entrance: string,
    view: string,
    parking: string,
    extras: string[]
    uploadDate: Date,
    featured?: boolean,
    employeeId: string,
    img?: string[]
}
const properties: Property[] = [
    {
        id: "1237",
        employeeId: "2",
        uploadDate: new Date("2024-03-20T08:00:00Z"),
        propertyId: "1-5-012",
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 159900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        parking: "on street",
        featured: true,
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "1",
        propertyId: "1-5-012",
        employeeId: "1",
        uploadDate: new Date("2024-03-22T08:00:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 99900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        featured: true,
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "2",
        propertyId: "1-5-012",
        employeeId: "1",
        uploadDate: new Date("2024-03-20T13:50:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 529900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        featured: true,
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "3",
        propertyId: "1-5-012",
        employeeId: "1",
        uploadDate: new Date("2024-03-16T08:00:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 29900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        featured: true,
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "4",
        propertyId: "1-5-012",
        employeeId: "1",
        uploadDate: new Date("2024-03-21T21:00:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 59900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        parking: "on street",
        featured: true,
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "5",
        propertyId: "1-5-012",
        employeeId: "1",
        uploadDate: new Date("2024-03-20T08:55:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 79900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        featured: true,
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "6",
        propertyId: "1-5-012",
        employeeId: "1",
        uploadDate: new Date("2024-02-20T08:00:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 39900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        parking: "on street",
        featured: true,
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "7",
        propertyId: "1-5-012",
        employeeId: "1",
        uploadDate: new Date("2024-03-22T02:00:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 59900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        featured: true,
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    },
    {
        id: "8",
        propertyId: "1-5-012",
        employeeId: "1",
        uploadDate: new Date("2024-03-11T08:00:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 59900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "9",
        propertyId: "1-5-012",
        employeeId: "1",
        uploadDate: new Date("2024-03-14T08:00:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 59900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "10",
        propertyId: "1-5-012",
        employeeId: "2",
        uploadDate: new Date("2024-03-19T08:00:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 69900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "11",
        propertyId: "1-5-012",
        employeeId: "2",
        uploadDate: new Date("2024-03-22T06:00:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 59900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "12",
        propertyId: "1-5-012",
        employeeId: "2",
        uploadDate: new Date("2024-03-17T08:00:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 59900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "13",
        propertyId: "1-5-012",
        employeeId: "2",
        uploadDate: new Date("2024-03-20T14:00:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 59900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "14",
        propertyId: "1-5-012",
        employeeId: "2",
        uploadDate: new Date("2024-03-19T18:00:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 59900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    }, {
        id: "15",
        propertyId: "1-5-012",
        employeeId: "2",
        uploadDate: new Date("2024-03-20T08:110:00Z"),
        description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!
    
    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
        price: 59900000,
        shortDescription: "Eladó Budafokon egy önálló családi ház.",
        city: "Budapest",
        zip: 1051,
        district: "District V",
        neighborhood: "Downtown",
        street: "Sas Street",
        transactionType: "Sale",
        propertyType: "Apartman",
        propertyBuildType: "Brick",
        floorArea: 34,
        rooms: 2,
        area: "SvábHegy",
        balconySize: null,
        orientation: "WS",
        yearOfConstruction: 1900,
        ownership: "ownership",
        moveInDate: "within less then 3 month",
        conditions: "good",
        comfort: "fully equipped",
        attic: "no",
        floorsInBuilding: 3,
        floor: 0,
        elevator: "no",
        heating: "other",
        height: 3,
        bathroomAndToilet: "same room",
        balcony: "no",
        terrace: 5,
        accessible: "no",
        gardenAccess: "no",
        entrance: "from the cuntryard",
        view: "countryard view",
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg", "https://www.digitalphotomentor.com/photography/2018/09/real-estate-photography-interior-photo-750x500.jpg", "https://candyfoxstudio.com/media/Real%20estate/2.jpg"]
    },
]

export type Employee = {
    id: string,
    publicId: string,
    name: string,
    position: string,
    phone: string,
    email: string,
    description?: string,
    properties?: string[]
}

export const employees: Employee[] = [{
    id: "1",
    publicId: "1",
    name: "John Doe",
    position: "Sales Leader",
    phone: "+00 00 000 0000",
    email: "example@example.com",
    description: `Tisztelt Érdeklődő! \n
    Több mint 10 éves tapasztalattal a hátam mögött hivatásomnak tekintem az ingatlanközvetítést. A saját elképzeléseim megvalósítása és a hatékonyabb munkavégzés érdekében \n 
    önálló vállalkozást alapítottam, melynek fő tevékenysége továbbra is az ingatlanközvetítés, csak egy kicsit másképp.\n
    Engem örömmel tölt el, ha azt látom, hogy a látszólag ellentétes érdeket képviselő felek a közreműködésemnek köszönhetően elégedetten állnak fel az asztaltól egy adásvételi vagy \n bérleti szerződés aláírását követően. \n
    Vallom, hogy elégedett ügyfelek nélkül nincs üzlet. Erre a szemléletre ösztönzöm kollégáimat is, akikkel a hét minden napján készséggel állunk rendelkezésére. \n
    Hívjon, és meglátja, hogy nem fog csalódni !`,
    properties: ["1","2","3","4","5","6","7","8","9"],
}, {
    id: "2",
    publicId: "2",
    name: "Vanessa Doe",
    position: "Sales",
    phone: "+00 00 000 0000",
    email: "example@example.com",
    description: "",
    properties: ["10","11","12","13","14","15","1237"],
}, {
    id: "3",
    publicId:"3",
    name: "Admin",
    position: "Assistant",
    phone: "",
    email: "example@example.com",
    description: "",
    properties: [],
},]

export type Reviews = {
    id: string,
    name: string,
    review: string,
    rating: number
}

export const reviews = [
    {
      id: "1",
      name: "Peter Kovacs",
      review: "From the very first phone call, I felt I was in good hands. The team was professional, kind, and always available to answer my questions. They walked me through the entire process step by step, which made buying my first home a lot less stressful.",
      rating: 5
    },
    {
      id: "2",
      name: "Julia Nagy",
      review: "Friendly and helpful team, they answered all my questions.",
      rating: 5
    },
    {
      id: "3",
      name: "Thomas Szabo",
      review: "Flexible scheduling and a fair approach. Highly recommended!",
      rating: 4
    },
    {
      id: "4",
      name: "Anna Toth",
      review: "Great experience, very kind and respectful agents.",
      rating: 5
    },
    {
      id: "5",
      name: "Zoltan Farkas",
      review: "Quick process, everything was transparent and smooth!",
      rating: 4
    },
    {
      id: "6",
      name: "Erika Kiss",
      review: "Everything went smoothly, excellent communication throughout.",
      rating: 5
    },
    {
      id: "7",
      name: "Adam Varga",
      review: "Honest and reliable agency. I would work with them again.",
      rating: 4
    },
    {
      id: "8",
      name: "Dora Molnar",
      review: "Outstanding expertise and very empathetic staff. Thank you!",
      rating: 5
    },
    {
      id: "9",
      name: "Andrew Laszlo",
      review: "They were super helpful in finding the right property and explained everything clearly.",
      rating: 5
    }
  ]

export default properties