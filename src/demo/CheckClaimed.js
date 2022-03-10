import React, { useState } from "react"
import * as fcl from "@onflow/fcl"

import Card from '../components/Card'
import Header from '../components/Header'
import Code from '../components/Code'

const checkClaimed = `\
import GogoroCollectible from 0x8c9bbcdcd7514081

pub fun main(): [Bool] {
  let hashes = [
    "1906d9c921529912523ddc59ecf468b261981e773e78d570d2af0e913774de3f",
    "6a4a3c081aa553809fac94af17e73c9c03e6ffab42db60204c4e394eba884aec",
    "f68d48f0eeda20e5a4290cd36580afdbac630134f3ec62268ac871700a06e5d8",
    "ae7ff28be3082848613b6f35ef3c8e63643d0808c41d2cc6642fa5ef5eba5cd8",
    "9b7f59ede11a4e51b85d52017811b045bc2f4e3f425fedf4a50b9d48afbbea98",
    "f2ceb956a733e24845c32ce538cec93c1af949f55037601588050048d49adc04",
    "fc25ad3ff5cb149151ed8d74d816e637b659b02991c1427f1308249a4e8577e3",
    "1858487a25f7fa961b759318c7fcf27f970955ce4ed8d66b8ec0f9eb250aec57",
    "13c416a1060eaa3ddaf1da4d861aec8772f2fd333cd42e548d99d9b9664127c7",
    "82f28f907c07ebdc35162affdb63bad83e382be34159e1b7abec90ae4dd315e7",
    "1f9684091f1d1581bb22f5371dd0df9d4edd5025d976135a016ca3cc52efb65d",
    "8282ce5d048fea36b272990a9c0f124720e6ace0f7bd4b1321c14ab32660e7d4",
    "a95f6598bd481ee0f92a89f0aec744cf0ddea8b377c163e062e607013e698e16",
    "853ae5023735b3c855ba5cb63f0a2c42fba252c77b541c1831b5cc96c1228841",
    "518071d9705c1740e0fa391c249217db4276f4e6b6e90ff27c006cf06493d808",
    "2447a9841460f55629bd6d2c65787ecab60e2a37a9a1d2ec7e19b37885bb7905",
    "a2334c008719c597f98ad2f9b8c823d1ada186e44d2c59cdf294f8ba0ff44e61",
    "5b768f68bfaf77647c052e7cd86ff79dcdfe887fac298f9228d30e7e16a881af",
    "1c89e47fa22da1ccbd3f1a621955a5ad430c736be8468b8bdff2d70140d68d2f",
    "73f1ef2b41c11d62794ed895c67019a39de4d2963886a63b1ef3fa63d90b78b5",
    "87917466542b323e6c29d8538538568cf4cc37af9003b8e023b8bec7af6a8ae8",
    "623b1e7abf3f8eb80bc68bd20d393ee341fb217786ae8377830a6b6e209dd551",
    "edac3aba8bbdd87ab05d6ccaafe0d379e838ebcaeeabe267b5fa2e1cbbf08c92",
    "1357e4d396e4aa8e1e9f94faa104d7627b86bdd6e59720d58324f478a5dc83ba",
    "a3cd46217155ee85a7eb3aec8eb438f545e4c454fcc360aba2801eb6f3268109",
    "0a2d697cc1ba95e67fee60e45a53250eb2ea23f3dbcfcd9d4ab857221fb12a72",
    "c29c72629b4e9c7edd47f2f32a79102348a3ad9b80388258b632a32a18c174e9",
    "485703c7110fc154d3918351933baaf756989cf762e35ebb68aacb8efcf16ee6",
    "16c134f7b0ef74799ff3bf0d8bbaf22185a10bb7f46db09e4298cb31572338e5",
    "ee5b25e8b8de2e95830cfd9435e614524180809897aa39cad54662cc835d37fe",
    "7db9ec03e643bdd0c68ba60d5d18eab227af4612af069adf2eeeb2c73b04969d",
    "531544c666ccc9ae742dc99dd5eb37f23aa558cb01ed419b3d8bfe3c920ebe82",
    "aa0ef4070f85048eca245756487f4e741e846c0d1abb668b1830c29eb614e16b",
    "5536a0898c9cd727c0bad3b04c36d3d992208691198930ffa97ab967ba78ecc7",
    "548eb9a94258380694e8649dc6fd4e71f012dc589121d5e5fc0e749bda536b93",
    "71dbe7b8b155603cab4fcd778d214f40e2dc304ef7834b093426ebb497ccb473",
    "dae5eed61190bd2c9f105fc548085e561f93ed9e7957d21bfe7227664e132ccf",
    "ff51cadf3dcb0e4f7067628796369b8e6f66bae294a5f4564eb0ed7f4ef4466f",
    "c90aca3b10640d224f7d11d3a2b2ab6ea95f7385d2532ee6036d3ca4777a5149",
    "b82790bb1aae804b7bc0a73f2babece9d2f863ffa3781e7c03da9f657bc37fbd",
    "dbd598c05ce397dfa893584e5f0561eb92c4f5af0fd0a49fb62c03749037acc5",
    "67daf2b8047408ba659e96f0d3aaec9c440e10835c42935eeacb2f3d2cb27172",
    "5425ee1bc86b837686d06d34414ea93f8c38d4d2d777a30695821541b5ff22c4",
    "197ee5371c095bf1d2ba348dad389125556cc5df5deb7e674d19d6c2d60a4393",
    "e260d1039c98f85e6274d62ca299852f4bb4522e76c7ec23306c917d4e0e1881",
    "e5bfff4097f55771b0a4ce4c09391784d8fb5618bdf2b613e0b0c4866e75ca92",
    "abc3c087bff9b5ee850b0011974c27bac9789ab9fb5ac0b65ba2d428a71bc175",
    "0593544b0a32c14cd24218649e3c62822be069f46ed793728c2a52edd1b60810",
    "f8869086128ed690f2bc851d1c2334510c734d01f9ba9432417d8d2ae67861d1",
    "7ab0ce7079f342bd6933740a8674603a172938d1e7a6a7c64e39c97c85f9f8ee",
    "615ccba50c9ed71c2a313d24f168292cd5200a1c26a656b0687b8636ef33b038",
    "d1381b9b574d6c01a0b13e594cf29878d2a4d1ccb130068229df4adc8668d7e2",
    "1f4108d69d4435662311a24a8e79de1618c88823b123f9f547d26a0d07767f84",
    "1dafca736047146ae8495ce88e1fa38ab886606c569165f1e33df9568f398b03",
    "a0331cee95862d7434bb78972a8119462b026e7f8e8c2d9fd9053b46ceff6e7d",
    "5914fb7d41f22c2fb49b3991028146d746692a70020552d3d302e08b3dab3e80",
    "3170136a1d04cef3aa0d215ec98c9e0064612b8addcf19c8b60cabed02cb7d71",
    "4615bf97f8151a77868735620d1ee7e5b478040adba4cf083a51283a94d0a0d3",
    "341adb1725002878a4d340720430a344b477aca62255fcc6f07426ca03782a57",
    "b40b83ee2ea788767c6776af2a47d35bee25506c621d1a95f82fb8cfce1fb527",
    "1b61a2166fcd88d9e97d12bb10c16cc845a2c5ba0d6e4f855f3b5c708e24ff4c",
    "41b331cb6c6bdd484df1c4860265395fee7f18a58f2f9acc4f5a9cf2a119de35",
    "997343f6bac6c0c88252ffc96746252abb9655c825399cc82ed598fda50c25b5",
    "06627ed94c75c27daf712917dfa1805f6f8f9d887096a04c1322b6b0dac3f38d",
    "262aeb614b81fdcd19338b8d4c6787567c09d0053d8c78d8a36257b710d92090",
    "0eff809459cbaed3b729e824733c513df5c7d2820c8984c4574b346d3e363a67",
    "cf4bc53612d1c3e0492f8e00c332e1cfafb55e86b75a30ad08f10de5ccf39074",
    "b601104b995528cd2c013ef2bd9642c0776f06c66868888036db50644d1b77c5",
    "181aab30305a9290b56f7a89014fb77303ba97ee152529545e866dfd28c01cca",
    "d94c9a08be88c97c72406cd24d8309282b52ae21247820a572578db4424e3e69",
    "8828fc8db2f7f019dd003301a30e003f83027da6428e1a8ec5b0c6a466131d8c",
    "b638efa826db66695fc8b52139fc2dd528b2d2ec3a7dc3555cd2106d5ebead8f",
    "6fc80a181f7d1907beee416b91b3f97bf10f32646202b4c176844478be3b4ef9",
    "eaa554ee9a070b12a8ed6b6a9a35d7b65a7661553978f069e437d68cdffd5b81",
    "e7bf5b667c1530cfd4951cfa73c8cd51f1896b20d5605c51e86e64235e2b079d",
    "def12c98bc9d452011d94f2ce972d752e37300a9248ac6cdf2439a731f64bca5",
    "5c8c6ff971e0d60065cdb4c3fcfbbc710b0203df96edde5fa01063ffa0c75606",
    "155398fdd9f510482aab64614b17726184d67886a0db7e37305bdf9b2b7dd780",
    "71c757014649c1b7fc2d0fbbdf140d71129ffa9394e50c2502212134e716de42",
    "a0012050c7ddedd0d4c15e262a0c60db8ea49e0ba7a67efc358ac44c323a633f",
    "3b4b6a8de9ced9e2c5da67002ac86d9498ea5b0f303efc46ce8688494f98a4ec",
    "e276a33c6982b064f8e2181cb4879843328dc2f4acca081923c4645ca20b070a",
    "b1a4725e7d165b0925b5057f1ba5219383f44b43f6be66d16eac0212fc589b89",
    "d8cfa72c24bec351714fc3d25751ba13f912abdd5814739561756c7de427318a",
    "6cb84d7a3f0d08237ef47f953dc95a1d1e65868fed9c77bdca0d3b0c6e71b0e7",
    "a2a1ea723892ed06cfaf149faa2223c6c9151721a953d11cb1c8709b2a0921f3",
    "c632f797215d7850bb2250112270764ef7363aa1ed406bdd3dac4e8ed4c9020f",
    "5aaeba619796c4c8396a56cb944ac0f91ebc0af94c1415eb0ccfc254b70611c3",
    "1dcaaf39840e569244b505715f5fcbc901f6e0247ee0befad2d60cca9192d45e",
    "88fade4cd1a223dcfb3fb10e2025ce7547f1abc0eccaac987849fb4cea4ab532",
    "c5062acfe6093e6020fec08d1808a87052afc84744918a35701332abe1122c9d",
    "2db8e76d4aeeac19e5a8b559abaa106fb990c7dd36268b5f455bb08785cc9bc4",
    "0d2e72f1a79ea84d8945f2e9f7f6a43b75066bae9c2dff3adb88c392bdb438d5",
    "320de52e8bf4918d2501360d8da6aa5355a89304e1c6556e6a0f87b38fe83a77",
    "1eabfe8e76fcef1600fc5f30040147de7912598d11628a3e7b925b18d0d239ce",
    "7268ee839c1be948815091469c1a4137224d1e0ca2a2ce921b2259fea4e354d5",
    "dcb384aea197e41a6ee30de10da386089f3da8bedbe70b7864512774c22b54a8",
    "aef0184e5b6f61dd6f0228dd5762eb8a73249aa6ab36ba03244285d791bffaf5",
    "70f356e87ddffff7e51d4a7cdc953b84b4dfc886cd760bec590cd37dfc99e691",
    "cc54d45c65c47d653cf639638c36abbad3bc5a38552816a7b97be19dd8e70476",
    "2037b0a1aee3549468ac8e0c59e240d0963609310689d1c61a15aaa1e15cd8dc",
    "d47f6ac1b04c67e0914c5d5f5fc575fccf1400ce8c696b12728083ebeff3824d",
    "e9517820ed89380d806df8c7ced14b91eaa43a07ca4f22c29a11e39155d6397b",
    "69afd2eea8a353092db5576f46488bcd65f9defb88c9fda5f450cae390d59f8d",
    "9aa78fcc51c7eef24ab2bdc5e4756b36399035e23767fc984170352146395aca",
    "6d8c7663d0a44b8fc9efcaa9dc0a3e6306f0c69b84e78bd881b54b579b366162",
    "b3f3e73c581e1c13bf2a164032ba35a8dba7c858f54985297ad5aaf3a6415681",
    "c8e7e7b42db7d5395bb5462cd6b4e593c764fdce0b37c98dc2f60e81aab2bd0e",
    "cbf74f2ea4b914fac491f14edaf0b700fcfe6f7cd8adac8d0ae99d9dc6bad802",
    "c7e346db4c8d10dc51a8dd60515d0c6a8da61626362062fc20fbc82dbee196bf",
    "930fd13078e6c5f8fad5cf8845fb1c8de97a4efbf57c313316b3a99e65c4036b",
    "6c32d0a3bfe06bf44766be8894249c1d3df2116039bfec10c0d7ad2ec5d507f0",
    "f5f814d0cd4d309014c66a6bcf892412d3ff0ab1040820a0d2dcaaf525c3f247",
    "ae4ad0292f24b64e434f6fe06a5317054dd18455bc0c5e290672c8c7b0aba707",
    "231fe4ebb286821a86c2197b781a9035c6ab0c341424c800922df7f8d91e305b",
    "78b23854fd5294a89718f39da7377de3c246e67449c80906dfa21d6da68c4e25",
    "ff75f59aecb34b98675e46f7bee085df3d81ed5798dbdd8bde3de8fa3a2ea21d",
    "7eed6799843146aca08b9290208ca467c34df9463981b2eade173caba64b71e3",
    "4865b1f15c89f80e9b92d550de337859d2d9df91c6e1902e844320130cc5dc05",
    "515be7f314b968d86e7058a7d33807a8ab03a294e949007e5da6a4620609f9e5",
    "fb6ff7919ede91ca67c7ac755fdae2374e5a8bbc87e5a236c343b965153b8f38",
    "748fc7fb136202ddaa6a690d8a4097423d186cd9ea2fcd088abd6fb4e51a4d43",
    "52b27f527b1a1d48c4b5a8b9c0b9e03befb6f6d97587032d8eb168f1d907f4b3",
    "0dc41178a665c3ccab67225b1d8522a98bec57aea776882cce8525fe4aabbfeb",
    "c108de585944ff4e62a1eb3dfe3fbdf2a266ddb5e83c66d2f51bf0a6cad46558",
    "2f9fd1f73881d9a5783f8760cbfafee295f107fc9531d1517891e975401ac7aa",
    "9eca71a7f968e4ed024fa45c042cd2285967c300f08d783233989c92ee6a552a",
    "98905fc875375c471b358e44ca4c4559d959a1f8beabd6226b3893c9da705752",
    "9346b4a17fe277d7dae45304bca2a080dddd1fec1793593489b805a01fae9e24",
    "f7ec35bbbd285e0ccd17f145b28665bdb276cc8d838bd032a0830118b9227e71",
    "e336d7fcc4d7163fb00e55584685c106cc419d9eedc3c10125cb9cc06e3ccb67",
    "28ba55e57061eaa413ffb6eaa11dfc02901734f733255f17f0b3206009ef0ffe",
    "7cc5419e7b317b7dabe598b22ba47f3a2c972cbf0ad365e78f633327b63ea94e",
    "afba5ffd7d24373f35bce09c7d70a48eb6b1b0b406894378ff70e5811e5314c6",
    "c0d60362947b60f7944af39eeccce4ec6bebc022e07c5f57d1feb540ef407d1c",
    "145744321a1e64a9260fbdb31bcd3283f1738febaaaba960a4c3c01bc7219d5f",
    "b021b9dda1d5441876b82642027e24f79f0a6dd091c816dc6ec15f26d9c0dfe6",
    "cc9e93b42a0f1fe1b1ab84e58e7642d81267d428c326fee3dcaf59580c43bbaa",
    "e9dd44ec5abe078c4eb544c21a07681496f45a429de52857f97cc331ccd5b78d",
    "f1114efecb660d771c94a0088949ed2d3a8035c0e767562b9f3e2ca2e31c61e9",
    "43915749ce875db716290b18325f8cd679769c0f07605a22600c56658c8e943c",
    "feb867853587bb3a07d477c3c20ee3e4f65fb0601f9be4c603e5df65ce0c24ac",
    "4f16cac00a10ff46c532cc8486e887909845e5fe3b97395668ae9a6eb66b59b0",
    "e50081c4d9ba36b1aa7899f1947a3f5d932dbe127d74366f72db88408439812a",
    "c3ba8dadfda8bb80b3102dd72cd2aa28de6abe024ff4177e2aa6de893bbb6091",
    "94e808cdc81baf0fedfcaa627c38f10a56dda7ab3c5e1468a8fbd3841ccef743",
    "93818a9458e8a1d119a4a547e82d272f79362cae99e57fee8687e988a5abe81c",
    "97276f16bab2ccc6308ad3ceac6bd6a9fe45e4cddc408b6e5bbbfe832b15db16",
    "0e23404058695f8421440ba7a7539dcb41d67b9041a1f1c4715e5f5175bd863c",
    "12b2f984fe29122476c2d36787f9c84b23ba5c240785b3456612c07dfc27916b",
    "2bf6066c8ee50f3c217300f4cb32bdd74120ab6f6d4c3a9e8a4f713f422ce2b1",
    "10c4049ffd164a6e0dd3bf35b422b92245c2b41125de6a7f83d00dc4ad016304",
    "11a27d577a32b698ac0cf392f391917c6e0362b60fcc2fb6b24437a99cddce9d",
    "153785162ce7c7e9056c2dd78981054de957db62a81baf54946b83990c8c6248",
    "04d11c271bc1c5d0a8fb3e10c3a0c56b9186d6d0fb3c7237b3720207cb1549e7",
    "3a1b28120201837e10ce0fe516058da7eb980c0d6e6dddae87f75bb16d3ad453",
    "8fffb339ca08d2e6c23096f46a035b163b5dc9e60576bcb1b473070823a3f64d",
    "178b7bd97ecd3013ff1334e7fe61cced3b9a0f7b1967b8d6355a979f9ae83b15",
    "816b3812b8c5681165ef26644333431852c6fdc78f9a07b6a7fbae315531173d",
    "5c4f8ceea8de2ddb331507d0d092510c23f173462fc6e3defdc7c766fef52f35",
    "eb15e9f2d81518e49eda819a5c4d9a9a15480f6e3dabb31c69021c15d74b08bd",
    "1faaa17dd1815eacc0ebd6edf09e0e6b9acf3ac30feaf92397a013e06ae0c15a",
    "78088ac4180f518d2cb9b9d5d45c3194b21755173221e03c449795294ee726de",
    "747b8db8407d706d689ab026a6fc74966054a2ef5517cc36a13ec4754310e282",
    "6fc077429cb02b8fc3df4a8d9139ffc4290260791e815400e22f0d9f2e5ed488",
    "4eff3128f09e07bcf3f079d3bdb3cfe623b850756c430059b9490f14786c7baa",
    "16497eeb9a213c12c8ed24ab93886fbd0d35071f217cd8906ffa60422bb1e414",
    "5f3e7ee043731b3e79354fdca76d6b9030a90c5929ff2db061281c2747558d93",
    "9a4f8d8538f0a300200342221fbe83bd95f8c3ab8fc94e6afa6866d2dcc1aadb",
    "20f2d310de0411bfd391f751cee4c9f525398a8885e8b89693b3d1a9b6cf4915",
    "fcdf32b6057c5c3b593c9607342427332b2e80e30429e051603fc868279e3807",
    "6e5c89d87342c933bb5828e5284d6c81ad5191d812dc39287186d17aa2a591f1",
    "35dd88a482669b5a39ecc958a32ab3ad797839735c5294b015efcedc1eba9800",
    "583eff6487dc611cbf43f8bc8e73a3c11227be72d6599337fef7040180e0d5cd",
    "60de5cb8ea9f03a3f173b8ce6a704ab25e6d26a15f186bd076055ce2effdc321",
    "7a2ef4f1d69abeee6cf93452429ef06a15012feb661224c8753dc4c53c6e2419",
    "a8d787166c262b10c43dd7eb3396bf6cefad28edf2d23341dda8a47f3be364a7",
    "c43365804701081e1a2e2cffb2bdc28d4f91c3bd85c8d7427090da1715e22c06",
    "fec81189ad28f214626ea368be9b8d98372066f5e514b377d152b416960a19de",
    "99e50110a9005f3161314f8b6986e0c8df94489f28ff8e7935eac94100b0ddc7",
    "949de235ff4c23ab4ff8bdbc98e9c5b9dde63ac6f945f58d184861bcd711bd84",
    "e9419f37dbc87ae6550733553ea101001e3886210c0061ac3d8ebf462da46d87",
    "ccc6ec9a2a9b2765e0177bb5bff41b92c6fba2cb244ec94aded08e61cd9d41e8",
    "73f7fa71ca00920ff8abf9fd5283bd1f24c06cca9fd0f12bd5f0a75749359c7c",
    "72d4defee70f83af12e3bae061fa462dbeb3971e1ddff8aeea1c5762b5af49d8",
    "3aea673154e6e3899e0b736a0019423ce0ee8ba5319fb802a1e3344e0f4c8dbd",
    "f041e57a9522b07a0d1aa7e3d4308fe24d9b1ae698dd97f6038dbb2274203854",
    "eecfa2eb2c0529f60fbe06284c69aebb3485f8dc769cb8438ca6c8eb8e657966",
    "3dec77e57a5466d1a277eee8390e8d44bc0b26b30c980beb245f8e54053f9854",
    "801762dab0baf6a9c90fc253ccb08850ac1ab16ae31f11c3e5ec46ce2ee66222",
    "b9005d1a93966126951c234d22188b8578e8f10b96e76259ab9c528347dd61b1",
    "d85ebb94ac5086cb95dbf9ea8f384d885158e5d2c2fd969d2481bab1b55c8292",
    "36dd05626b38be4c81ab2f9623c418c5ffb70c7f2053739803b8f93c9d114885",
    "fa1127a2a282ed62c5a6b2368536b54e3ff23c120f411d2a78cb315729954a8c",
    "4b38f0022e70e81271a7a15f12f9b4e9541913b119fb725b363d97449c988f47",
    "17a10630e9cc66a1ec0f4219189eefcfc070978e869ed7f5d026efd98b209961",
    "363c7026d9b18fbfedff11520604182286fe1412ebfe7c39f80890895e51fc39",
    "0ee0b44550029cf04108c25e26ce5d7ca617fd909e561adc19a33a06ac7ff6dc",
    "d45b0ef7bca31bb6c177713781a5254ab80fbf01ada75e79f9c0e6df78a27d91",
    "4e70448523f1696649633ff275ce404ea21cb3f1b32c91bdc4cdbd387bb1304c",
    "088e551bf86a1b0e4790d6bd83621339e98cf4dc8fe11d6f2890ad9a70fb14ce",
    "85ce4aeee8b753e3485e5ddff2597fa5f11ceb45b924bb67909d4c2169d1a12f",
    "a5dc228c9567613ca9d4623697793d8369f13d362ac4859e9e7d6ed7932b19b0",
    "9c3d69cb8b4d8c066b3d5d1469e3d1a9024f96bee914cd7cce3286d688d6c15a",
    "f3631ae8052b86616abf13a7260276252658153ba4ab551c2e1da2f8dda5fd13",
    "90d45af9087597bff3965d5e7c0f23807a93fc81ae8474f0128d12e374aca18e",
    "0e9f18a96a3c3cd7cb37f3c49fb8916ee7dd5d277c9bf287435b70c68f321b21",
    "a91f21e8dadea41f2f6c4816321c9db622ff366fe930d4d1c90af679129715ce",
    "293236497786e68263a1552142089748a42e60c2400b1ea5e0120298f3f3a9c9",
    "241e3518541c5d5bca97fdd080a0ce7aa6e4111f611430ae74b5add0a3792d43",
    "4d03940d33f6c74e26df05cffa4d235b96391c9bdbdc31d26f18b4283cf88dbb",
    "86f571caccb29da73c5edbeb6eaa4062ac6d268eb8925b3dbee209c045bb6c44",
    "d7557db423cb93cc86029403386008b72addf8ad14f27ba2d36c98a92aab418a",
    "27a33de83da134267f0840da07d3bd03e62c701dcd5113612fa82771a3032373",
    "c8c6e97289ca7957dfeb34793a0af9f35e8ed1287f48cca3f9c8231d665981e5"
  ]

  let claimed: [Bool] = []

  for hash in hashes {
    claimed.append(GogoroCollectible.checkCodeHashUsed(codeHash: hash))
  }
  
  return claimed
}
`;

export default function ScriptTwo() {
  const [data, setData] = useState(null)

  const runScript = async (event) => {
    event.preventDefault()

    const response = await fcl.send([
      fcl.script(checkClaimed),
    ])

    setData(await fcl.decode(response))
  }

  return (
    <Card>
      <Header>檢查領取</Header>

      <button onClick={runScript}>檢查</button>

      {data && (
        <Code>
          {data.map((item, index) => (
            <div key={index}>
              {item ? 'yes' : '-'}
            </div>
          ))}
        </Code>
      )}
    </Card>
  )
}
