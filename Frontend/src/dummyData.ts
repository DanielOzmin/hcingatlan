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
    img?: string[]
}
const properties: Property[] = [
    {
        id: "1237",
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
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        parking: "on street",
        extras: ["Unencumbered", "Low utility costs", "Open - plan kitchen"],
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    },
    {
        id: "1237",
        propertyId: "1-5-012",
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
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    }, {
        id: "1237",
        propertyId: "1-5-012",
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
        img: ["/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg", "/Testpic.jpg", "/housepic.jpeg"]
    },
]

export type Customer = {
    id: string,
    name: string,
    position: string,
    phone: string,
    email: string,
    description?: string,
    properties?: Property[]
}

export const customers = [{
    id: "1",
    name: "John Doe",
    position: "Sales Leader",
    phone: "+00 00 000 0000",
    email: "example@example.com",
    description: "",
    properties: [],
}, {
    id: "2",
    name: "Vanessa Doe",
    position: "Sales",
    phone: "+00 00 000 0000",
    email: "example@example.com",
    description: "",
    properties: [],
}, {
    id: "3",
    name: "Admin",
    position: "Assistant",
    phone: "",
    email: "example@example.com",
    description: "",
    properties: [],
},]

export default properties