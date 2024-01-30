import { Image } from "expo-image";
import { Dimensions, FlatList, StyleSheet } from "react-native";

import { View } from "@/components/Themed";

const IMAGE_WIDTH = Dimensions.get("screen").width / 3;

export default function TabTwoScreen() {
  return (
    <FlatList
      data={ARRAY_OF_173_ITEMS}
      numColumns={3}
      renderItem={({ item }) => (
        <View>
          <Image
            source={item.logo}
            style={{ width: IMAGE_WIDTH, aspectRatio: 1, height: "auto" }}
          />
        </View>
      )}
    />
  );
}

const ARRAY_OF_173_ITEMS = [
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/5d07b8f1-9be0-423b-8c90-f395e5c095f6/enbd.PNG",
    id: "clrupmxkn0zi9p142z4n8bjs8",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/a0dc5f8f-c58f-40b6-a854-844375e0e89b/Afik-Group.webp",
    id: "clree7nbr000eiq4225wooiqy",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/415ad0f8-72c1-4117-a38c-2953059b06fc/International%20Realty%20Group.webp",
    id: "clree7nfm001oiq4210y5yvm0",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/4e0e8d28-3587-4acf-8a1d-261e3ae0a75a/Properties%20in%20Spain.webp",
    id: "clree7nh00027iq42oevlsehm",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/84e0a77d-a616-48f8-a53e-cb18921f7408/Canopy%20Sands%20Development%20Co.%20LTD.webp",
    id: "clree7nd5000uiq42fsngy0g5",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/b3348631-a7c3-495e-bd1f-baffe2cc917c/Al-Taresh-Group.webp",
    id: "clree7nc2000hiq42l7lcfgfs",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/1b32db69-54db-42c5-9700-e48ba92f5b7e/Apartchain%20DMCC.webp",
    id: "clree7ncl000oiq42ly8h5cd5",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/eb20e4bf-0043-4aca-b426-9e3fa8667ba5/Construction%20%26%20Architecture%20Update%20Magazine.webp",
    id: "clree7ndn0010iq42dvspi2yz",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/a0ad9d5a-ca29-4868-87b1-9483b3abee22/Arosa%20Real%20Estate%20%281%29.webp",
    id: "clree7ncr000qiq42ote99k4e",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/c51a9479-aecb-498a-8f6b-14c8111ebf3a/Dirham%20Real%20Estate%20%281%29.webp",
    id: "clree7ndy0014iq42bi3h4w70",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/7d91eb4a-c4a7-454b-a590-2b8f5362f4b4/Berna%20Advogados.webp",
    id: "clree7nd1000siq42gom0s531",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/a27962ed-2fa4-429e-84eb-7efb436c571f/Manju-Global.webp",
    id: "clree7ng4001viq421zd3t2w6",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/4df30638-b8c6-4d89-8a19-5a4e9c52410e/iPREMIUM%20Magazine.webp",
    id: "clree7o8z0063iq42tsq0icxp",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/178c8fb2-ce15-49ce-bbaf-37a0c0cca57e/Jordan%20Eye.webp",
    id: "clree7o910065iq42dinixws8",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/530a88fb-8a94-4b7e-9d21-dbf62db58221/Amin%20%26%20Wilson.webp",
    id: "clree7nc9000jiq42c20ypk3a",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/5faae3c0-4e2b-4355-bbd7-59c41b241fb1/Binghatti%20Holding.webp",
    id: "clree7nd3000tiq42ufegjojr",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/cf895913-ea3c-41c4-b571-6c022f130b76/Miami%20Realtors%20YPN.webp",
    id: "clree7o580047iq426rg460kf",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/e3397115-5942-4e4f-aef6-6d38b5bdd5a2/Florida%20Realtors%C2%AE.webp",
    id: "clree7net001diq422lplly3l",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/75bcfee9-53b0-40f1-8227-dbba1d42ea14/Dubai%20Land%20Department%20%281%29.webp",
    id: "clree7ne60016iq425l8wnf4d",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/b56838b8-2427-42e4-b1d7-c7b414529f6f/Property%20Pistol.webp",
    id: "clree7nh50029iq42izls8cv4",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/fbffb6f8-0eea-49dd-9c16-29e1f716e82e/Proscan.webp",
    id: "clree7nh8002aiq422ss1s4rn",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/98db3749-bb56-4225-a195-e5f49d2ed3a2/Orlando%20Regional%20Realtor%20Association.webp",
    id: "clree7o5c0049iq42t7y5i8zi",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/3dbed040-28aa-4c18-8c06-2ed9aea1d689/MIAMI-LOGO.webp",
    id: "clree7o550045iq42dfve9ti0",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/f9e757e1-a4ed-4846-9373-fde654990812/Icon%20Homes%20Real%20Estate%20Brokers.webp",
    id: "clree7nff001liq422sooxs28",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/9501c9f9-7412-4cb7-b5a3-f69e43275f71/Injaz%20Real%20Estate%20Registration%20Trustee.webp",
    id: "clree7nfh001miq42lp36j36r",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/b5a5493f-4d8a-4a1e-93d2-725131cf83cc/Takhlees%20Government%20Services.webp",
    id: "clree7nic002oiq42s2nngd86",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/d5639950-6c07-454b-a8ec-e238ba53202e/Arosa%20Real%20Estate%20%281%29.webp",
    id: "clree7o48003fiq42ll2yhyg9",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/b826b4d2-c2d1-4719-8c3b-566630ec96a7/KLASTER.webp",
    id: "clree7o5e004biq42w3ke0whr",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/48a16fa1-96e9-439c-b677-222b1ef4fc2c/HB%20Family%20Properties.webp",
    id: "clree7nf7001iiq4263sszzt2",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/d75408a7-0c6d-435e-910f-c3c477fea059/Florida%20Realtors%C2%AE.webp",
    id: "clree7o63004tiq42cl2vwn79",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/2dfb4319-75bd-4de9-b057-dc5244225914/IQRA%20Technologies.webp",
    id: "clree7nfp001piq42nj3ychxv",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/ced96c55-9ed8-4c5c-819f-3324035c02e5/Megaworld%20International.webp",
    id: "clree7ng7001wiq42dqhip0jl",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/25330547-6a42-4580-a9f3-0ea921f18b4d/Asian%20Real%20Estate%20Association%20of%20America.webp",
    id: "clree7o4d003hiq42lcqgqnsr",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/32f32944-2791-4e9d-9ea5-90e14d813886/FIABCI%20-%20INTERNATIONAL%20REAL%20ESTATE%20FEDERATION.webp",
    id: "clree7o4t003viq42a07bpl4w",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/16abfdeb-34a3-4f47-9764-b72409d9ea44/Innovation%20Experts.jpg",
    id: "clree7o530043iq42cgo0bpe9",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/b5b865ce-1a9d-416f-aa3b-907d1686b521/True%20Expo%20-%20Official%20T%C3%BCrkiye%20Partner.webp",
    id: "clree7o5y004piq42didgbn0d",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/2a96b8db-5f5e-451d-b91b-619540c82c1e/Innovation%20Experts%20Real%20Estate%20Institute.jpg",
    id: "clree7nfk001niq422e1arr4a",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/4e83d88c-ae17-4935-aaac-5208f073b917/Asociaci%C3%B3n%20Paname%C3%B1a%20de%20Corredores%20y%20Promotores%20de%20Bienes%20Ra%C3%ADces.webp",
    id: "clree7o4f003jiq4264kvi17s",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/45cf096e-d664-4cad-9e53-81b05e9a2df3/Mindall.webp",
    id: "clree7ngi0020iq42on7ku542",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/e434b096-df6a-4940-b47a-c5ad0dd5b682/Nest%20Seekers%20International.webp",
    id: "clree7ngn0022iq42mmwxy7q3",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/b491bb75-6365-47c9-a823-75b80c386595/Ouchi%20Dao.webp",
    id: "clree7ngv0025iq424lgzu8wa",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/cef46d12-d00a-4307-ade1-4f78907e362a/Reidin-Logo.webp",
    id: "clree7nhl002fiq427doi7jza",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/4643cd63-ccc1-4ba3-9f91-85691ceb3795/Val%20Morgan%20Consultancy.webp",
    id: "clree7niu002viq42ooqaps32",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/495d6cc5-5d26-4636-8e57-7b0dc227c429/Central%20Florida%20Brazilian%20American%20Chamber%20Of%20Commerce.webp",
    id: "clree7o4i003liq42ur140cc9",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/3ce97f50-7f9d-454a-8b10-66784e6b0e0c/Al-Tamimi-Co.webp",
    id: "clree7nby000giq42ge4u4oun",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/416f5319-62a2-4a06-aff9-65272b6f4a44/RANKme.webp",
    id: "clree7nhd002ciq42xgd0tlm6",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/c5ae2f28-db83-4369-a671-40176a17dfad/Confederaci%C3%B3n%20Inmobiliaria%20Latino%20americana.webp",
    id: "clree7o4n003piq42vdgg4pr7",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/5b5c907d-a2ef-4797-9c30-375e32887427/CEO%20Clubs%20Network.webp",
    id: "clree7o4k003niq42ru3noobn",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/eae23dd7-ed0e-4648-9784-f2662f5ebdfe/Safir%20Toos.webp",
    id: "clree7nho002giq42t018w8j6",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/75e574a0-7e10-44c7-a915-74355fc7f378/DigitMe%20%281%29.webp",
    id: "clree7ndv0013iq42fgall5og",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/419125fc-e95c-4632-bea4-975d68a85d11/Accomi.webp",
    id: "clree7nbo000diq42w2vez5j0",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/af6b7781-583e-4cb9-91e1-5e6a658d8c7e/KoRes-%20Vivir%20Invertir%20USA.webp",
    id: "clree7nfw001siq42aer4fxza",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/67c16ecb-3309-462d-a340-5b81e6aca867/Victoria%20Estates%20Private%20Limited.webp",
    id: "clree7niy002xiq42f000zug1",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/dccb7a95-cb32-4a7e-88e0-921c99e94c2d/Akular.webp",
    id: "clree7nbu000fiq42k9i5z9nx",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/d382e2a9-cd28-4b87-a864-bf4f0d24b4d3/Angels-Investment-Group.webp",
    id: "clree7ncc000kiq422yxl5o7e",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/712022b7-9504-4307-b42b-14b0207e4572/Xclusiverse.webp",
    id: "clree7njc0031iq42tefqrqod",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/5366fb92-ed62-4c2c-aa5c-7a50faf79eb3/Property%20Network%20Partnership.webp",
    id: "clree7nms003biq42h058vv2x",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/f7983207-da91-4586-bc56-e13c5d2e2cf8/Angels-Investment-Group.webp",
    id: "clree7nce000liq42i6a9tc4d",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/b58b41ca-6d61-4eff-bed8-135d4b357b66/Annet.webp",
    id: "clree7ncg000miq42m0awu1jt",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/9e149776-6539-4327-ab1e-45db144489a3/Antares%20Barcelona.webp",
    id: "clree7ncj000niq423nfyikgv",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/1750fce0-8173-4f1d-bcad-0cdac03ef796/US%20Investor%20Group.webp",
    id: "clree7nir002uiq42la8a92un",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/baa73bec-8833-4dc5-be36-e7f04b346a0b/Ampsi%20%E2%80%93%20asociaci%C3%B3n%20de%20mujeres%20profesionales%20inmobiliarias.webp",
    id: "clree7o44003diq42zrujagk9",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/bd0739c7-3337-4abb-a633-6a2e8a648cb4/Next%20Group.webp",
    id: "clree7ngq0023iq42uwmh5yu3",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/016147b2-144d-49f7-871a-32e31e28d92d/Seal%20Real%20Estate%20Registration%20Trustee.webp",
    id: "clree7nhx002iiq42154y5x7g",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/37794a0d-2b22-46af-92e7-cc679f6a95d8/Dubai%20Economy_White.webp",
    id: "clree7nmk0037iq423db7xf20",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/278025de-4f6d-4dc2-8f7b-e998044018fb/Dubai%20Land%20Department.webp",
    id: "clree7nmp0039iq42tj2z3vna",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/9953ccac-e1dd-42be-a275-d86d5275803e/SNPI%20%281%29.webp",
    id: "clree7o5m004hiq423z64c3yo",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/ed6293ef-049a-4b63-a74c-8375952f88fc/SOE.webp",
    id: "clree7o5o004jiq42jw3ektqe",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/77da118a-3620-4966-8b48-33d458c5d5c9/Strategic%20Infinity.webp",
    id: "clree7o5r004liq42px3nr123",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/7b887512-e293-4845-9dd1-a8f36f83fedd/ThinkProp.webp",
    id: "clree7o5u004niq42sehb50kb",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/41191b6d-bcee-4450-9cbb-e5b8b3c4fcc4/FIABCI%20-%20INDIA.webp",
    id: "clree7o4r003tiq42czs0cfym",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/13000b70-63eb-4a7c-86dc-430004a92087/FIABCI-%20Belgium.webp",
    id: "clree7o4w003xiq42j9xzvm03",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/338e4bbd-c544-4653-bf6c-947b0db968dc/FIABCI_1.webp",
    id: "clree7o4y003ziq42txryttsn",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/91ecea3d-fbe2-4449-971f-a87c56fb1f59/Ukrainian%20Business%20Council.webp",
    id: "clree7o60004riq428itvmt72",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/cbd862ac-bff3-4c71-85ee-8a85f7f45f84/Incredible%20Ideas.webp",
    id: "clree7o500041iq4289xdtahl",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/474060b1-6ad3-4c1a-ab57-5b4f7208a7cd/RBC.webp",
    id: "clree7o5k004fiq42b133yykw",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/5024b137-8b07-482f-b039-d118d81a439f/RQ%20Logo%20Final%20PNG%20%281%29.png",
    id: "clree7o5h004diq42vhml1qz1",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/357e9f57-1d63-47a5-b439-a52259b0b875/Exhibitors%20TV.webp",
    id: "clree7o85005fiq426i32tp6j",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/907fc4b1-ec9d-4a73-88e3-e9b6330f4490/Eye%20Of%20Riyadh.webp",
    id: "clree7o8a005jiq42r4tb908s",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/af6a165e-e55f-4fae-8e67-4320fb725419/FM%20Logo.png",
    id: "clree7o8d005liq420yuy1od7",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/8525a638-60a7-48f6-90ea-7b6224fef67f/FAMILY%20OFFICE%20MAGAZINE.webp",
    id: "clree7o8f005niq42s28svowu",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/296299be-fd7a-4bba-822a-f59484645d1b/FW-Magazine-White-Logo.png",
    id: "clree7o8i005piq4204ieg8xz",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/e0db172c-63f5-49c2-8aa7-63b1c0eec018/Financial-Nigeria-Logo.webp",
    id: "clree7o8k005riq42kymxrdhm",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/7cbc9188-2f57-4dec-9078-4ac63d0e5415/Gwalior%20Sandesh.webp",
    id: "clree7o8n005tiq42zmns8w80",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/0a97096c-be1f-4471-8759-8bf91f9fcef4/Immotify.webp",
    id: "clree7o8p005viq42cvbt1832",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/ad165a9a-8ddf-4639-a7d2-ace9f681a5a4/Industry%20Events.webp",
    id: "clree7o8s005xiq4282yqyvec",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/86c385a7-0e19-4bb8-ad35-abdafcaf5ca1/Arqam%20Logo.png",
    id: "clree7o7j004xiq423ndjslqk",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/7dbe39c9-a67d-4cf1-a4a2-63f9415e1aa5/Asia%20One%20Magazine.webp",
    id: "clree7o7l004ziq42zjwuqsi5",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/dbea2531-5b6b-4f2c-af98-1a3a020432b9/Capital%20Finance%20International%20%28cfi.co%29.webp",
    id: "clree7o7n0051iq4243n4tf3p",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/f16e49ce-c365-43f8-a1c9-bf5debf51e5f/CHIC%20ICON.webp",
    id: "clree7o7q0053iq420q6q66ld",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/2ef663b1-cc69-44f8-8132-dc9348dee8a2/Dubai%20Survival%20Guide.webp",
    id: "clree7o7t0055iq421zqhsixw",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/e34a55d3-1b66-4010-8658-9877cc0b0c1d/Eco-Enviro%20News%20Africa.webp",
    id: "clree7o7v0057iq42wl077e7n",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/c3b10038-cecb-4aff-8bb1-6286cb32d12e/ERA%20FAME%20MEDIA%20GROUP.webp",
    id: "clree7o7y0059iq42lop8ttzi",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/682beef9-6b25-418b-b57b-da11f0c32e4e/europe-real-estate.webp",
    id: "clree7o80005biq422so2ai20",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/cf0871b3-68d6-4973-8897-1dfc0a91c65c/EuropeanLife.webp",
    id: "clree7o83005diq42j1g7orae",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/8bc2b1d0-ce74-4421-bcbc-276f27d73759/Eye%20of%20Dubai.png",
    id: "clree7o87005hiq42fazhsss7",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/70a87298-cb22-4e58-bf60-036317df5873/Material%20Bidder.webp",
    id: "clree7o940067iq42oz314ftd",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/56092f5b-5d3f-4993-beb6-32eb13a34640/Medialinks.webp",
    id: "clree7o9a006biq427703mz8l",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/29a56a07-f869-4eeb-b300-8a21588e96a8/Negosentro.webp",
    id: "clree7o9f006fiq422io6qgiv",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/819c0049-9a35-41ec-b8fe-146d935c5388/Pashion%20Magazine.webp",
    id: "clree7o9l006jiq42ih22eqf0",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/175c9de2-6782-47cc-99a0-fa8dff26d54c/cropped-logo.png",
    id: "clree7o9o006liq42pbkbc5v7",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/70f737a5-a17d-4312-bc21-d0b3d025076d/Property%20Time.png",
    id: "clree7o9q006niq42exihq20b",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/863f718d-f249-4318-8fc7-cc9824433d07/PROPFYND.webp",
    id: "clree7o9v006riq42qunhy2to",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/56e580fa-b4a1-4b44-b8ce-8b99589acc1f/Reidin-Logo.webp",
    id: "clree7oa0006viq42jh66gt82",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/691b0010-d4d7-4dfe-89bf-85fab86702a9/Siraj%20Daily.webp",
    id: "clree7oa4006ziq42x0y8mj6u",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/5d250dcd-efe8-4ea0-8767-a0467dc5f8bc/Realty%20Catalogue.webp",
    id: "clree7o9x006tiq421k65myf7",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/a3caa392-c582-4978-b47a-d2733d275ff2/REM%20Times.webp",
    id: "clree7oa2006xiq42ad83dsib",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/e7ee2985-116b-46a8-9d17-9da5bae49f48/The%20Exchange.webp",
    id: "clree7oa70071iq42kteqkkfu",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/8c64e1aa-8478-4f20-a4a3-67e095710b16/Investment%20Reports.webp",
    id: "clree7o8x0061iq42vjwt7hzc",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/d760add1-2e8a-40be-9f16-8c4166fe5b17/MEP-NEW-LOGO.png",
    id: "clree7o970069iq42x6u5mt9p",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/17e12145-5549-40ee-bb7c-b860f6a83e5b/My%20Latin%20Capital.webp",
    id: "clree7o9c006diq42slhcupbk",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/adc59690-e1c6-42e5-9d9f-a128c4a8ed28/OXFORD%20BUSINESS%20GROUP.webp",
    id: "clree7o9h006hiq42j3v6gghr",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/47728a26-0b06-44bf-8372-09248cd6ecde/PropertyNYC.webp",
    id: "clree7o9t006piq42sytmsxp3",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/dacf93a4-0125-4b84-97cc-935125a50d64/UAE%20Contractors%20Associations.webp",
    id: "clree7oac0075iq42nnqo13gj",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/d5ab7c04-3b34-48f4-9478-ce7b4074d0a2/Visionnaire%20Moralmoda.webp",
    id: "clree7oae0077iq42r5my5t1z",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/818eb213-304b-4695-8ad5-d910e6f9f2e0/Confederaci%C3%B3n%20Inmobiliaria%20Latinoamericana%20%28CILA%29.webp",
    id: "clree7ndk000ziq42z229aeej",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/714acde9-d947-4c58-b7fc-bccf4174c566/Fumba%20Town.webp",
    id: "clree7new001eiq42wotkec9x",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/90f5c581-afc7-42cf-9443-1c91655d9924/Limassol%20Greens.webp",
    id: "clree7nfy001tiq42x17u9651",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/b4ce55cb-e31f-466b-a064-bc22f8cd6d46/AB%20Developers.webp",
    id: "clree7nb7000ciq42nmv1wtpw",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/d0445c57-5c80-4f5b-b7eb-2b35886f4869/CPS%20Zanzibar%20Ltd..webp",
    id: "clree7ndq0011iq42ymjrw630",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/a8b7e081-d2f6-4151-b6f6-c7b13ea09ab1/Miami%20YPN.webp",
    id: "clree7ngf001ziq421ebtiu89",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/0da358c9-5e8f-428d-98b6-ce8d6e4550f0/Society%20of%20Engineers.webp",
    id: "clree7ni4002liq42ybbzqycj",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/ff822dab-c42e-4626-94ad-634dc976136b/FC%20Homes.webp",
    id: "clree7nen001biq4266p7xqpx",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/f45f4913-32af-4dbf-8175-a14a0283060d/Central%20Business%20District%20Punjab.webp",
    id: "clree7ndc000wiq42xvcdy9bl",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/239cb5dc-89e0-4c22-8bcf-a78cf5c91c5a/Era%20Fame%20Media%20Group%20%281%29.webp",
    id: "clree7nek001aiq420zpoqtqz",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/142b89c4-d92b-41af-93b7-08d4c08c516e/Homeland.webp",
    id: "clree7nfc001kiq42brt0gw2l",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/b8b89aa7-fbcb-446c-a36c-fd4348dce65d/KL%20Metro%20Group.webp",
    id: "clree7nft001riq42an4g3dy7",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/1370d992-7ecc-4619-86e0-59ce3d71dab8/Haider%20Bin%20Haider%20Advocates%20and%20Legal%20Consultants%20Private%20Notary%20Services.webp",
    id: "clree7nf4001hiq42h2qhxwiy",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/1fa76598-46b4-4d44-b35c-39a013453745/Conselho%20Federal%20de%20Corretores%20de%20Im%C3%B3veis.webp",
    id: "clree7o4p003riq42awaktkso",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/0426733b-cbce-4cac-922a-a0c7d4d6bc38/Afrique%20Media.webp",
    id: "clree7o7g004viq42m45b25j2",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/7f1c2caf-b702-42a8-8c7b-ac6f0c4a044f/Invenclick%20Media.webp",
    id: "clree7o8u005ziq42rc1p2qbj",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/aa62fa6d-7c8c-4777-8ab9-5a661153aa42/FW-white-logo.webp",
    id: "clree7oa90073iq4249i4pj5p",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/17ac85d4-1667-424d-a6ec-4a712ccf3634/Emirates%20Real%20Estate%20Solutions%20ERES.webp",
    id: "clree7neh0019iq42zzb040k2",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/0b903ea5-2918-4353-925b-67b3ae5f8f03/Keller%20Williams%20Realty.webp",
    id: "clree7nfr001qiq42z8zcabkk",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/254dca95-16f6-4c9a-8d85-a26a6a54ceaf/Luxury%20Property%20Team.webp",
    id: "clree7ng2001uiq42d4y4rabo",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/a1ba2453-78ea-4727-a154-11dad3e97426/Metro%20Brokers%20Florida.webp",
    id: "clree7ng9001xiq420ki5mlbk",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/5eb292fe-bbeb-495c-869b-52bcc8aae118/Myron%20Homes.webp",
    id: "clree7ngk0021iq42si26hqzk",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/f63b1926-7209-4ef1-b355-a958372a7c48/Tamleek%20Real%20Estate%20Registration%20Trustee.webp",
    id: "clree7nif002piq421q314x78",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/a778aff5-8f67-4daa-8bd6-ba53677d17ef/Park%20Royal%20Cyprus.webp",
    id: "clree7ngx0026iq424p9upulv",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/0c08aae4-2123-4d83-8e45-7aef6a43358a/TransformologyXR.webp",
    id: "clree7nip002tiq42tpyujbq7",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/370962da-1835-4da3-ad00-a6dbe27a5894/Ayia%20Napa%20Marina.webp",
    id: "clree7ncx000riq426s8enfqs",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/371a96de-b4d0-42e3-83f9-dc37abf4a3c6/Verse%20Estate.webp",
    id: "clree7niw002wiq42n1m2uqmm",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/74752961-739a-44a1-84af-a6983a139aa6/ViewIT%20Real%20Estate.webp",
    id: "clree7nj1002yiq42h2cua5p4",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/d191336a-1aaf-4395-b167-c981ca4a5041/HH%20Realty.webp",
    id: "clree7nf9001jiq425snfsg7n",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/7baafcf8-5d3e-443e-9236-837a9a971963/Stratwell.webp",
    id: "clree7ni7002miq423a2pky2g",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/d3109f61-5cd9-4efc-8be8-290af15bcbde/TheGoldenVisa.PT.webp",
    id: "clree7nik002riq42o89nwq64",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/4995a473-20fc-465a-9e47-f2b1e7551dd8/ThinkProp.webp",
    id: "clree7nim002siq4206qvwksv",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/50e56590-14e7-4616-b356-73caa68b6c79/Zest%20Luxury%20Properties.webp",
    id: "clree7njf0032iq42ed2ux0yd",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/daa6e53c-4bdd-4758-abd6-b20f712833c7/WESET.io.webp",
    id: "clree7nj6002ziq42ifvcl9yy",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/432bd4ae-0ed8-4f49-98b2-c57e0142f0bd/Winstone%20Projects.webp",
    id: "clree7nj80030iq42vkxcgg1f",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/5675d5ef-6d9e-4ead-84a5-f504a895fb1c/Al-Suwaidi-Company.webp",
    id: "clree7nc5000iiq42fwdm4i12",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/8fd857d0-5985-4b53-9527-ee450fddd1e1/FIABCI-%20Emirates.webp",
    id: "clree7neq001ciq42dcmc0ljq",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/413298b1-2ec3-46a7-923c-f362123bc2a3/Realty%20Catalogue.webp",
    id: "clree7nhj002eiq42jdl1c7iw",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/d7ae9e26-3c39-494a-ad40-c2a7ff2547d3/Duke%20World%20LLC.webp",
    id: "clree7neb0017iq42jmuwc3dj",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/53865b64-574d-49c4-b8c2-79f692b82b96/Go%20Smart.webp",
    id: "clree7ney001fiq420hddiwyq",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/ad35e68a-1def-4754-ba87-d87baa5a4067/Groupo%20Remax%20Vantagem%20-%20PORTUGAL.webp",
    id: "clree7nf1001giq424956g8io",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/18fc7eac-e22f-4d2c-aa0b-f153687e2f70/Property%20Network%20Partnership.webp",
    id: "clree7nh30028iq42iinxts4r",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/ad675d1b-a17b-4808-acd9-cc16db368022/Sunny%20Development%20Group.webp",
    id: "clree7ni9002niq42s8vsexog",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/1dd1d6eb-3439-4ca8-a929-cd51b48837fc/TerraConcept.webp",
    id: "clree7nii002qiq42yv6uf5fl",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/be70d25f-fdbd-4e50-a4f6-7b2da4cf659e/CEO%20Clubs%20Network%20logo.webp",
    id: "clree7ndf000xiq42r45q6n3j",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/bc610df1-5099-4902-afe7-9f8776f536ca/Elhaj%20Group.webp",
    id: "clree7nee0018iq4226flidk6",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/91377e1d-002e-41a6-be1c-cf7fa87f389b/Quest%20Cove%20Properties.webp",
    id: "clree7nhb002biq42dplgh4l3",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/9aab0047-3fa0-420b-979c-17e3a7a2636e/Samana%20Developers.webp",
    id: "clree7nhr002hiq42sulzq38z",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/6aeb6c86-72fb-434e-aaf1-70813670b79a/Senor%20Matts.webp",
    id: "clree7nhz002jiq42lezspr8r",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/6e42002d-4e6a-4a1f-86ca-c25da6da91e0/D%20%26%20B%20Properties.webp",
    id: "clree7ndt0012iq42onebwzzj",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/8a20328d-c759-4c31-a47a-6143f8e1b9b3/Miami%20Association%20of%20Realtors.webp",
    id: "clree7ngc001yiq423yo7oaxg",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/5e805c4b-c255-4f3a-bf54-0c6a7e6eefe3/Casa%2010-%20Golden%20Visa%20Portugal.webp",
    id: "clree7nd9000viq42lp1h9x03",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/f30bcdff-c644-41a8-a6cf-c7d31a1794e7/Cipriani%20Residences%20logo.webp",
    id: "clree7ndi000yiq42ohz2iib4",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/f7525f02-cb09-4d0b-925c-bd1787bfc580/ARAA%20Land.webp",
    id: "clree7nco000piq42yxg4y66r",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/910b9fc4-51a9-4e10-8985-be80855b9a6a/On%20The%20Move%20-%20Mediacao%20Imobiliaria.webp",
    id: "clree7ngt0024iq429vjc3wb9",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/b4344496-feef-4d72-80e4-544ec7e2b7e2/RE%20MAX%20Advance%20Realty.webp",
    id: "clree7nhg002diq42wbd2qbe2",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/3470dc98-d6be-4486-a935-b4b38fdcb54a/Double%20Dragon.webp",
    id: "clree7ne00015iq42ltgoo3vb",
  },
  {
    logo: "https://assets-us-01.kc-usercontent.com:443/6c08ae22-aaba-00c5-2884-7221a976fac0/ee83d48d-4644-4574-9bc3-2e22fec4fdec/Seven%20Fourteen%20Realty.webp",
    id: "clree7ni1002kiq42n8dj5xc5",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
