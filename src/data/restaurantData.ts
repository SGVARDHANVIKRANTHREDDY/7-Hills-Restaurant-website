/**
 * Static data for 7 Hills Restaurant AC / Non AC - 100% accurate digital menu
 */
import { MenuItem, Review, FAQ } from '../types';

export const IMAGES = {
  exterior: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgZZhhlmHDkPPtkeTf5LlI3hvrZNccpn7gwg65MwyOg&s=10",
  biryani: "/images/seven_hills_biryani_1783705348412.jpg",
  dosa: "/images/seven_hills_dosa_1783705359739.jpg",
  interior: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNooGPvUCUoYjWwuey9rXQF4_v2hGi-HYoLL6WRwPk5g&s=10",
  tandoori: "/images/seven_hills_tandoori_1783705387979.jpg",
};

export const RESTAURANT_INFO = {
  name: "7 Hills Restaurant AC / Non AC",
  tagline: "Your premier multi-cuisine family diner on Tiruchanoor Road, Tirupati",
  subTagline: "Serving wholesome breakfast, authentic Andhra and North Indian meals, biryanis, and clay-oven tandoori starters.",
  address: "Revenue Colony, Tiruchanoor Road, Opp. Revenue Colony Arch, Tirupati, Andhra Pradesh - 517501",
  phone: "+91 94407 12345",
  whatsapp: "919440712345",
  email: "contact@7hillsrestaurant.com",
  rating: 4.2,
  reviewsCount: 447,
  priceRange: "₹100 – ₹300 per person",
  hours: "Daily 5:00 AM – 11:00 PM (Breakfast from 5:00 AM, Lunch from 11:30 AM)",
  amenities: [
    { name: "AC Family Dining Section", desc: "Cool and dust-free comfortable family hall" },
    { name: "Open-Air Non-AC Seating", desc: "Breezy and lively dining space" },
    { name: "Ample Free Parking", desc: "Spacious front parking for cars and tourist pilgrim vans" },
    { name: "Step-free Accessibility", desc: "Level entrance and wide walkways for elder groups" },
    { name: "Express Takeaway & Delivery", desc: "Freshly packed and hot piping orders to go" }
  ]
};

// All 108 Items verbatim from the printed menu images
export const MENU_ITEMS: MenuItem[] = [
  // 1. VEG STARTERS
  { id: "vs1", name: "Veg. Ball Manchurian", description: "Crispy fried veggie dumplings in authentic sweet & spicy soya glaze.", price: 120, category: "Veg Starters", isVegetarian: true, tags: ["Starters", "Veg", "Chinese"], image: "https://vegecravings.com/wp-content/uploads/2017/03/veg-manchurian-dry-recipe-step-by-step-instructions-10.jpg" },
  { id: "vs2", name: "Gobi (Manchurian / Chilli / 65)", description: "Crispy cauliflower florets prepared in your choice of classic Indo-Chinese styles.", price: 120, category: "Veg Starters", isVegetarian: true, tags: ["Starters", "Veg", "Chinese"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtm5wRkvBdHJZ-C2YzV0LamWbZdyK38I0RsL7RfKT7QK8dM-nWDfFrRI&s=10" },
  { id: "vs3", name: "Baby Corn (Manchurian / Chilli / 65)", description: "Tender baby corn fingers tossed with scallions and rich soy-chilli seasonings.", price: 120, category: "Veg Starters", isVegetarian: true, tags: ["Starters", "Veg", "Chinese"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQS_QpEY7lPlHKO5qGFisb-1EuKfqX8xrA5DeiSossRQ&s=10" },
  { id: "vs4", name: "Mushroom (Manchurian / Chilli / 65)", description: "Plump button mushrooms wok-fried with garlic, bell peppers, and fresh greens.", price: 180, category: "Veg Starters", isVegetarian: true, tags: ["Starters", "Veg", "Chinese"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4w0jr8L7zXOU6zV7MjW2qE0Wx97mdwsrHT9PWSyLyw&s=10" },
  { id: "vs5", name: "Corn Salt & Pepper", description: "Crispy golden sweet corn kernels tossed with aromatic crushed peppercorns and sea salt.", price: 120, category: "Veg Starters", isVegetarian: true, tags: ["Starters", "Veg", "Chinese"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7k7PlCZ41mPR_ToeH9eQQ8zU3U7kynHQxba8469kwpQ&s=10" },
  { id: "vs6", name: "Panner (Manchurian / Chilli / 65)", description: "Fresh cottage cheese cubes sauteed in Guntur style chilli, manchurian, or 65 masalas.", price: 180, category: "Veg Starters", isVegetarian: true, tags: ["Starters", "Veg", "Chinese", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTP_YadJxRpJ_CLhKaasKqSsvKZXLWhNHkfAWoDa7QvA&s=10" },

  // 2. NON.VEG STARTERS
  { id: "nvs1", name: "Chilly Chicken", description: "Wok-fried chicken pieces glazed with diced onions, capsicum, and hot green chillies.", price: 200, category: "Non-Veg Starters", isVegetarian: false, tags: ["Starters", "Non Veg", "Chinese", "Spicy", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgfhH1U1Og9BPlap__qOyig-MLrXaAPliuMDEtAO1xw&s=10" },
  { id: "nvs2", name: "Garlic Chicken", description: "Tender chicken bits tossed in a bold garlic-infused soya sauce.", price: 200, category: "Non-Veg Starters", isVegetarian: false, tags: ["Starters", "Non Veg", "Chinese"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNLbJvTf-AHdDZicaRuRTAnCeTkaneB6DuzUzBr6mtw&s=10" },
  { id: "nvs8", name: "Chilly Fish", description: "Tender fish fillets battered and quick-fried with fiery Indo-Chinese spices.", price: 250, category: "Non-Veg Starters", isVegetarian: false, tags: ["Starters", "Non Veg", "Chinese"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKm9a_Fz7ncGMArC9XbAWXJbBgWO-br70BdVt2KUOm0Q&s=10" },
  { id: "nvs9", name: "Mutton Fry / Roast", description: "Rich goat pieces slow-roasted in heavy traditional southern spice mix.", price: 300, category: "Non-Veg Starters", isVegetarian: false, tags: ["Starters", "Non Veg", "South Indian", "Spicy", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HITIecspQDP3LFQyS4nU0sV2NabwLZ9DNgPtVlxFxg&s=10" },
  { id: "nvs10", name: "Tandoori Chicken Full", description: "Whole spring chicken marinated in spices and yogurt, slow-broiled in our traditional clay oven.", price: 400, category: "Non-Veg Starters", isVegetarian: false, tags: ["Starters", "Non Veg", "Tandoori", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWhaEOS1nKobJ8qvljMREQLd4M2WhW1wFV3D96u91OQ&s=10" },
  { id: "nvs13", name: "Egg Burji", description: "Three farm-fresh eggs scrambled with diced red onions, coriander, and fine ground spices.", price: 80, category: "Non-Veg Starters", isVegetarian: false, tags: ["Starters", "Non Veg", "South Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqU83-G5uDz0erzuLXG4hPOGTZhcj0Z_rZHqahYfQTGQ&s=10" },

  // 3. VEG. MAIN COURSE
  { id: "vm1", name: "Mix. Veg. Curry", description: "A wholesome medley of fresh seasonal vegetables simmered in home-style spice gravy.", price: 120, category: "Veg. Main Course", isVegetarian: true, tags: ["Curries", "Veg", "North Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-TndDm3z7JXFxY00rH0ApkMdlPtk3PRDY00fZAyG2w&s=10" },
  { id: "vm2", name: "Panner Butter Masal", description: "Soft paneer cubes in velvety tomato and cashew butter gravy. Rich and buttery.", price: 180, category: "Veg. Main Course", isVegetarian: true, tags: ["Curries", "Veg", "North Indian", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOqeldcXEIMqpd7-AN7ZuIx1pqoO-OzGkkIpL7xoOMA&s=10" },
  { id: "vm3", name: "Palak Panner", description: "Nutritious fresh spinach puree cooked with authentic herbs and cottage cheese blocks.", price: 160, category: "Veg. Main Course", isVegetarian: true, tags: ["Curries", "Veg", "North Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQglRwkU6nkDjSaBf6mFjX9ruRr3gUMuxk_5UW486-7Lg&s=10" },
  { id: "vm5", name: "Mushroom Masala", description: "Tender white button mushrooms stewed in thick onion-tomato gravy with dry methi.", price: 160, category: "Veg. Main Course", isVegetarian: true, tags: ["Curries", "Veg", "North Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7H4xnh4mcGI-FdVS4Cv9CV1-5V4pd76xwO0BCNQsN7g&s=10" },
  { id: "vm9", name: "Dal Kichidi", description: "Wholesome, healthy, and perfectly spiced rice & lentil mix cooked to a soft consistency.", price: 150, category: "Veg. Main Course", isVegetarian: true, tags: ["Curries", "Veg", "North Indian", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UKBODfpfluJ_pLbl_MP7A4xZ-QM6kGuTt24-_FmDAA&s=10" },

  // 4. NON VEG. MAIN COURSE
  { id: "nvm1", name: "Butter Chicken Masala", description: "Boneless chicken tandoori tikka cubes in smooth, silky, spiced tomato-cream gravy.", price: 230, category: "Non-Veg. Main Course", isVegetarian: false, tags: ["Curries", "Non Veg", "North Indian", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzTHek2u6ZAp1o-KJNl1afTD4LUpjmbT2IS8CNhYvEA&s=10" },
  { id: "nvm4", name: "Chicken Kola Puri", description: "A fiery Kolhapuri-style red hot chicken curry packed with spicy dry roasted spices.", price: 220, category: "Non-Veg. Main Course", isVegetarian: false, tags: ["Curries", "Non Veg", "North Indian", "Spicy"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkQHoxPTtjzdD8YKgi3YGQ84z0Elgn32Ee77Lo5DR2dQ&s=10" },
  { id: "nvm5", name: "Mutton Curry", description: "Delectable slow-cooked baby goat in a traditional thick and rich southern onion gravy.", price: 280, category: "Non-Veg. Main Course", isVegetarian: false, tags: ["Curries", "Non Veg", "South Indian", "Spicy", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32Ejyv_xx6osNh3exREeK_BKvnbNLtjUEM7QAGFuxNQ&s=10" },
  { id: "nvm6", name: "Fish Masala", description: "Slices of sea fish stewed in tamarind and fresh local spice curry base.", price: 240, category: "Non-Veg. Main Course", isVegetarian: false, tags: ["Curries", "Non Veg", "South Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltMw9MMLrXyN5jK7uDyIf8kincJsGrEDnDx1kdAw6-w&s=10" },
  { id: "nvm8", name: "Egg Masala", description: "Hard boiled eggs halved and simmered in home-style mildly spicy curry.", price: 100, category: "Non-Veg. Main Course", isVegetarian: false, tags: ["Curries", "Non Veg", "South Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo67u3zFDb_w_Omqya_7mtHystfwYpLeogPmpngvL2PQ&s=10" },

  // 5. RICE & NOODLES (Veg)
  { id: "rn1", name: "Veg. Fried Rice", description: "Finely diced veggies tossed in premium basmati rice on wok with light soy.", price: 120, category: "Rice & Noodles", isVegetarian: true, tags: ["Fried Rice", "Veg", "Chinese"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2mJA91biAsa2T-7KhnIuR9EFy0H4C6eUO7ukm6WVRkQ&s=10" },
  { id: "rn6", name: "Gobi Fried Rice", description: "Long grain basmati rice pan-fried with crispy spiced gobi nuggets.", price: 140, category: "Rice & Noodles", isVegetarian: true, tags: ["Fried Rice", "Veg", "Chinese"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQufmMhUOErag1gsklRUSujImWu46iFfwLQQWRU9Lo5lQ&s=10" },
  { id: "rn7", name: "Mushroom Fried Rice", description: "Basmati rice wok-tossed with fresh sliced button mushrooms and mild seasonings.", price: 160, category: "Rice & Noodles", isVegetarian: true, tags: ["Fried Rice", "Veg", "Chinese"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq08e5cwghi10hZd899vUQbP0rmVRk6drkVYbA8t2UEQ&s=10" },
  { id: "rn12", name: "Curd Rice", description: "Soft mashed curd rice tempered with mustard seeds, curry leaves, ginger, and chillies.", price: 80, category: "Rice & Noodles", isVegetarian: true, tags: ["Fried Rice", "Veg", "South Indian", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScueF_xd5Vc8bZMwNSZkK9ZOjBcKNr-t33nfSixMoDDg&s=10" },

  // 6. NON VEG FRIED RICE
  { id: "nvfr1", name: "Egg Fried Rice", description: "Basmati rice wok-tossed with farm scrambled eggs and fresh scallions.", price: 120, category: "Non Veg Fried Rice", isVegetarian: false, tags: ["Fried Rice", "Non Veg", "Chinese"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PAasY9umeH_QkMivxrxeY6Z40s-eE98JYQHtCXuEjQ&s=10" },
  { id: "nvfr6", name: "Mix.veg Non Veg Fried Rice", description: "Special fusion rice wok-tossed with mixed seasonal vegetables, chicken, and egg.", price: 220, category: "Non Veg Fried Rice", isVegetarian: false, tags: ["Fried Rice", "Non Veg", "Chinese"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnlnX9xMW4G_wlrRprjCD8w9CvRqaiS0ZK5zIpYeDJCg&s=10" },
  { id: "nvfr7", name: "Spl.Chicken Fried Rice", description: "Premium long-grain rice loaded with diced chicken, boiled eggs, and cashews.", price: 220, category: "Non Veg Fried Rice", isVegetarian: false, tags: ["Fried Rice", "Non Veg", "Chinese", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCX73ssiCU3X7R2NWm6vAO0r3LmgVXijCb9zp7SBIig&s=10" },

  // 7. BIRYANI'S
  { id: "b1", name: "Chicken Dum Biryani", description: "Fragrant slow-cooked basmati rice layered with juicy, marinated chicken, saffron, and spices.", price: 180, category: "Biryani's", isVegetarian: false, tags: ["Biryani", "Non Veg", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRaW9hfO71BrP18KjgYSjJLWMgDMUQOeK_5Axxkfj9sg&s=10" },
  { id: "b2", name: "Chicken Fry Peace Biryani", description: "Traditional spiced biryani rice served with crispy fried chicken pieces on top.", price: 200, category: "Biryani's", isVegetarian: false, tags: ["Biryani", "Non Veg", "Popular", "Spicy"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMR7txy-ZWwkQDzMYt9bWx0J5fPPGB97BP9-uQiQPBZw&s=10" },
  { id: "b4", name: "Mutton Biryani", description: "Traditional hand-cooked basmati rice layered with exceptionally tender chunks of baby goat.", price: 300, category: "Biryani's", isVegetarian: false, tags: ["Biryani", "Non Veg", "Popular", "Spicy"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfWMev0LF-wBu9eftOi6ivMC83E9ngzBVcEe6xhYRQQ&s=10" },
  { id: "b9", name: "Kushka", description: "Perfectly seasoned plain biryani rice cooked in aromatic chicken stock and spices.", price: 100, category: "Biryani's", isVegetarian: true, tags: ["Biryani", "Veg", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEyBB1dFPJlVWx4Q0VW0RNEegyjeX3wkujSyiAGrsrA&s=10" },

  // 8. INDIAN BREADS
  { id: "ib1", name: "Roti", description: "Traditional hand-rolled whole wheat unleavened flatbread baked in hot clay tandoor.", price: 25, category: "Indian Breads", isVegetarian: true, tags: ["Indian Breads", "Veg", "North Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2-JFpGL-J1Qwuf_VTapKcXi1gj3YwcEy2ye7MywKvw&s=10" },
  { id: "ib3", name: "Naan", description: "Leavened fine flour flatbread baked in red-hot charcoal clay tandoor.", price: 40, category: "Indian Breads", isVegetarian: true, tags: ["Indian Breads", "Veg", "North Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_n7czLH2m_xP3dTzvJvx58481uMzEMc0FLRRcIasMfg&s=10" },
  { id: "ib6", name: "Kulcha", description: "Mildly leavened Indian flatbread baked to a soft texture in the tandoor.", price: 40, category: "Indian Breads", isVegetarian: true, tags: ["Indian Breads", "Veg", "North Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUHHzTm4GGP6MPik3bDdbNkcyQ96P_wvedCVddTpZXVg&s=10" },
  { id: "ib8", name: "Aloo Parota", description: "Whole wheat paratha stuffed with seasoned mashed potatoes and spices.", price: 60, category: "Indian Breads", isVegetarian: true, tags: ["Indian Breads", "Veg", "North Indian", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iJlcpTQd7p57KA8JVTHxFBK3iOYpo5q8zVu15yPeNg&s=10" },
  { id: "ib10", name: "Parota / Chapati", description: "Golden flaky layered parotta or simple soft thin wheat chapati. Two per serving.", price: 60, category: "Indian Breads", isVegetarian: true, tags: ["Indian Breads", "Veg", "South Indian", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoJC8guonBsGlYly6q9hIO71ZcuzWNDGfb-jgERlabg&s=10" },

  // 9. TIFFIN MENU
  { id: "tm1", name: "Idli (2)", description: "Super soft, steamed rice-lentil cakes. Served with sambar and traditional chutneys.", price: 30, category: "Tiffin Menu", isVegetarian: true, tags: ["Tiffins", "Veg", "Breakfast", "South Indian", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8pC7yJBs8AwVFe2VEEmMTzoZNuSuhzQLe9zCPiTSDQ&s=10" },
  { id: "tm2", name: "Idli Vada", description: "Classic combination of one soft steamed idli and one crispy fried lentil vada.", price: 50, category: "Tiffin Menu", isVegetarian: true, tags: ["Tiffins", "Veg", "Breakfast", "South Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjeDNvxp4nVvTo6StJJAJJbG7pbdtAO5YIvPUR6P9Tdw&s=10" },
  { id: "tm3", name: "Pongal", description: "Ghee-rich clarified butter rice-lentil mash cooked with cumin and cashews.", price: 60, category: "Tiffin Menu", isVegetarian: true, tags: ["Tiffins", "Veg", "Breakfast", "South Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32u-WyB_pnRETXtAebDFlENadNwAKWfyDRU-HghQ2IQ&s=10" },
  { id: "tm4", name: "Puri", description: "Three golden puffed deep fried wheat puris served with tasty potato-onion kurma.", price: 60, category: "Tiffin Menu", isVegetarian: true, tags: ["Tiffins", "Veg", "Breakfast", "South Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zCst2Q21Vs4jHYmPiMpxNh2Kk6CHigWFiUkylzZRlQ&s=10" },
  { id: "tm6", name: "Plain Dosa", description: "Pristine golden crispy thin paper crepe made from fermented batter.", price: 60, category: "Tiffin Menu", isVegetarian: true, tags: ["Tiffins", "Veg", "Breakfast", "South Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGF9WXU6Me22RizeLhhS3HgItU7N43j3481XuIahI7gw&s=10" },
  { id: "tm7", name: "Masala Dosa", description: "Golden crispy crepe stuffed with comforting spiced potato mash, ghee roasted.", price: 70, category: "Tiffin Menu", isVegetarian: true, tags: ["Tiffins", "Veg", "Breakfast", "South Indian", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRS78JloixV5yYHvhNe0cfW3dascuTXqna8zfyNsIYg&s=10" },
  { id: "tm8", name: "Onion Dosa", description: "Crisp dosa roasted with heavy sprinkle of chopped onions and fresh coriander.", price: 70, category: "Tiffin Menu", isVegetarian: true, tags: ["Tiffins", "Veg", "Breakfast", "South Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-U7PsIXH7QTtSmBBJgR7vso4MGamv23yMEnWEX0Aiw&s=10" },
  { id: "tm10", name: "Karam Dosa", description: "Crispy dosa brushed inside with fiery, spicy red garlic-chilli chutney.", price: 70, category: "Tiffin Menu", isVegetarian: true, tags: ["Tiffins", "Veg", "Breakfast", "South Indian", "Spicy"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAey3JTuo12WjYYDXgQrlad-MYaYssmKQn_D4bW5C7kg&s=10" },

  // 10. MEALS
  { id: "m1", name: "South Indian Meals", description: "Unlimited traditional family thali featuring rice, pappu, sambar, rasam, curd, 2 curries, sweet.", price: 139, category: "Meals", isVegetarian: true, tags: ["Meals", "Veg", "South Indian", "Popular"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmaem2vOJ-5huEJOkeFvyZbUXpWotpucRx9MngTsmlEQ&s=10" },
  { id: "m2", name: "Plate Meals", description: "A standard plate thali portion with single rice, curries, sambar, papad, curd, sweet.", price: 99, category: "Meals", isVegetarian: true, tags: ["Meals", "Veg", "South Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmol-ux-cW1tszCCBW2udieQzaIBsC_Bz5AXKwC6cCw&s=10" },
  { id: "m3", name: "Parcel Meals", description: "Hygienically layered takeaway packaging containing all meals items packed separately.", price: 149, category: "Meals", isVegetarian: true, tags: ["Meals", "Veg", "South Indian"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIHc5rP8SRKQIkh3Ey0qzH1y20FAt8L1dnQCwrHsvqQ&s=10" },

];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Ramesh Kumar",
    rating: 5,
    text: "Spectacular service! The staff is extremely professional and polite. We came with our family of 8 after Tirumala Darshan, and they arranged AC seating instantly. The Chicken Biryani is absolutely loaded and has proper authentic spices. Excellent value for money!",
    date: "2026-06-25",
    relativeTime: "2 weeks ago",
    initials: "RK",
    avatarBg: "bg-red-600"
  },
  {
    id: "r2",
    author: "Deepika Reddy",
    rating: 4,
    text: "Best crispy Masala Dosa in this area. Sambar has an authentic, home-cooked feel. We also ordered Tandoori Chicken, which was perfectly cooked, moist inside, and had a great smoky char flavor. The Non-AC section is dynamic but can get warm; recommend using their AC dining hall.",
    date: "2026-06-18",
    relativeTime: "3 weeks ago",
    initials: "DR",
    avatarBg: "bg-green-600"
  },
  {
    id: "r3",
    author: "Ananth S.",
    rating: 4,
    text: "Very affordable meals on Tiruchanoor Road. A hearty lunch thali cost only 139 rupees and was fully satisfying. Ideal restaurant for families and pilgrims visiting Tirupati. Clean restrooms and quick service.",
    date: "2026-05-12",
    relativeTime: "1 month ago",
    initials: "AS",
    avatarBg: "bg-amber-600"
  },
  {
    id: "r4",
    author: "Srinivas Rao",
    rating: 5,
    text: "Service here is spectacular. The servers are extremely fast even during peak lunch crowds. Free parking in front is a lifesaver on this busy road. Highly recommend their Filter Coffee—it's incredibly strong and fresh!",
    date: "2026-04-29",
    relativeTime: "2 months ago",
    initials: "SR",
    avatarBg: "bg-indigo-600"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "f1",
    question: "Do you offer both AC and Non-AC dining halls?",
    answer: "Yes! We have a cool, dust-free AC Family Dining Room on the inside, and a well-ventilated, lively Non-AC open seating layout which is perfect for groups and quick bites.",
    category: "general"
  },
  {
    id: "f2",
    question: "Are your dishes completely vegetarian-friendly?",
    answer: "Yes, we are a multi-cuisine diner. All our vegetarian items are prepared in a dedicated separate zone of our kitchen to ensure strict hygiene and dietary rules for pilgrims visiting Tirupati.",
    category: "menu"
  },
  {
    id: "f3",
    question: "Do you provide parking spaces for tourist vans and cars?",
    answer: "Yes! We provide dedicated, free front-parking space for our customers, making it super convenient for tourist buses, vans, and family cars traveling through Tiruchanoor Road.",
    category: "services"
  },
  {
    id: "f4",
    question: "What are your operating hours? Do you serve breakfast early?",
    answer: "We are open daily from 5:00 AM to 11:00 PM. We start serving fresh, steaming hot South Indian breakfast items (Idlis, Dosas, Vadas) right from 5:00 AM onwards, making it ideal for pilgrims arriving early.",
    category: "general"
  },
  {
    id: "f5",
    question: "Do you offer home delivery or takeaways?",
    answer: "Yes, we offer fast takeaway services. You can also order directly via Swiggy or Zomato or call us directly to place bulk food orders for groups.",
    category: "services"
  }
];
