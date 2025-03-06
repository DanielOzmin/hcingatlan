export type Property = {
    id: string,
    propertyId: string,
    description: string,
    price: string,
    city: string,
    zip: number,
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
    img?: string[]
}

const properties: Property[] = [
    {
        id: "1234",
        propertyId: "1-5-012",
    description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!

    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
    price: "59.900.000",
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
    extras: ["Unencumbered","Low utility costs","Open - plan kitchen"],
    img: ["/Testpic.jpg","/Testpic.jpg","/Testpic.jpg","/Testpic.jpg"]
},
{
    id: "1234",
    propertyId: "1-5-012",
    description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!

    Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.
    
    A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.
    
    Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)
    
    A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.
    
    Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.
    
    Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
    price: "59.900.000",
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
    extras: ["Unencumbered","Low utility costs","Open - plan kitchen"],
    img: ["/Testpic.jpg","/Testpic.jpg","/Testpic.jpg","/Testpic.jpg"]
},{
    id: "1234",
    propertyId: "1-5-012",
description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!

Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.

A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.

Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)

A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.

Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.

Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
price: "59.900.000",
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
extras: ["Unencumbered","Low utility costs","Open - plan kitchen"],
img: ["/Testpic.jpg","/Testpic.jpg","/Testpic.jpg","/Testpic.jpg"]
},{
    id: "1234",
    propertyId: "1-5-012",
description: `Eladó különleges befektetési lehetőség a belváros szívében, a Bazilika mellett közvetlen!

Ez az egyedi adottságokkal rendelkező, 34 m²-es, belső kétszintes lakás kivételes lehetőséget kínál azok számára, akik egy jól jövedelmező, sokoldalúan kihasználható ingatlant keresnek. Az ingatlan a belváros egyik legfrekventáltabb részén található, ami tökéletes választás rövid távú kiadásra, Airbnb célú hasznosításra, de akár saját lakhatásra vagy hosszú távú bérbeadásra is.

A lakás földszinti elhelyezkedésű, a belső udvarra néz, így csendes és nyugodt környezetet biztosít a város közepén. A három külön bejárat nemcsak kényelmet nyújt, hanem többféle lehetőséget kínál az ingatlan különböző részeinek hasznosítására is, például különálló lakrészek kialakítására.

Az ingatlan tulajdoni lap szerinti alapterülete 17 m², azonban a további helyiségek lettek megvásárolva majd egybenyitva, így a teljes használható tér jelenleg 34 m²-t tesz ki. A területi bővítésről hivatalos szerződés áll rendelkezésre, és bár az ingatlan jelenleg három külön helyrajzi számon szerepel, ezek összevonása alapító okirat módosítással lehetséges. A helyrajzi számok egyesítése egy társasházi alapító okirat módosítással megoldható, amelyet a társasház költségén végeznek el(!)

A lakás különlegessége a belső kétszintes kialakítás, valamint az emeleten található világítóudvarból kialakított terasz, amely egyedülálló hangulatot ad az ingatlannak. Emellett az ingatlanhoz két tároló is tartozik, amelyek további tárolási lehetőségeket biztosítanak.

Korábban a lakás népszerű Airbnb-szálláshelyként működött, így aki rövid távú kiadásban gondolkodik, annak garantáltan jó befektetési lehetőség. Az ingatlan központi elhelyezkedése, a belváros minden előnye,(Óriáskerék, Bazilika, Váci utca, Erzsébet Tér)metrók, villamosok (stb,stb) és a többféle hasznosítási lehetőség biztosítja a kiváló megtérülést.

Ne hagyja ki ezt a remek befektetési lehetőséget a belvárosban! Hívjon, és egyeztessünk egy megtekintési időpontot még ma!`,
price: "59.900.000",
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
extras: ["Unencumbered","Low utility costs","Open - plan kitchen"],
img: ["/Testpic.jpg","/Testpic.jpg","/Testpic.jpg","/Testpic.jpg"]
},
]

export default properties