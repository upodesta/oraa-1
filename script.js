// Member Data - 48 Members
// Designation options: President, Secretary, Treasurer (leave empty for regular members)
const members = [
    {
        id: 01713257629,
        name: "Syed Hassan Ali (Liton)",
        designation: "",
        photo: "photos/member-01713257629.png",
        presentAddress: "154/4, west rampura, wapda road, Dhaka",
        permanentAddress: "Village: Kazirpara, Post: Baneswar, Thana: Paba, District: Rajshahi",
        workStation: "HR & Admin, mytv, mytv Bhaban, 150 Hatirjheel, Dhaka",
        mobile: "+88017132-257629",
        email: "upodesta@gmail.com",
        whatsapp: "https://wa.me/88017132257629",
        facebook: "https://fb.com/*",
        messenger: "https://msg.com/**",
        twitter: "",
        bioFile: "bios/member-01713257629.pdf",
        college: "Ananda Mohon College, Mymenshing",
        hall: "Mother Box Hall"
    },
    {
        id: 2,
        name: "Md. Abul Kalam Azad",
        designation: "Secretary",
        photo: "photos/member-2.jpg",
        presentAddress: "Flat 3B, Green View Apartment, Kazipara, Dhaka",
        workStation: "Chartered Accountant, Azad & Associates",
        permanentAddress: "Village: Joydeb, Post: Shakharia, Thana: Godagari, District: Rajshahi",
        mobile: "+8801722555555",
        email: "kalam.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801722555555",
        facebook: "",
        linkedin: "",
        twitter: "",
        bioFile: "",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 3,
        name: "Md. Shahidullah",
        designation: "Treasurer",
        photo: "photos/member-3.jpg",
        presentAddress: "14/2, West Agargaon, Dhaka",
        workStation: "Professor, University of Rajshahi",
        permanentAddress: "Village: Nandigram, Post: Nandigram, Thana: Nachole, District: Chapai Nawabganj",
        mobile: "+8801732555555",
        email: "shahid.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801732555555",
        facebook: "",
        linkedin: "",
        twitter: "",
        bioFile: "",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 4,
        name: "Md. Golam Mostafa",
        designation: "President",
        photo: "photos/member-4.jpg",
        presentAddress: "House 22, Road 5, Dhanmondi, Dhaka",
        workStation: "Businessman, Mostafa Traders",
        permanentAddress: "Village: Parana, Post: Digram, Thana: Bagha, District: Rajshahi",
        mobile: "+8801742555555",
        email: "mostafa.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801742555555",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 5,
        name: "Md. Nurul Islam",
        designation: "",
        photo: "photos/member-5.jpg",
        presentAddress: "Plot 8, Block C, Bhangla, Momirpara, Dhaka",
        workStation: "Senior Officer, Bangladesh Bank",
        permanentAddress: "Village: Tanore, Post: Tanore, Thana: Tanore, District: Rajshahi",
        mobile: "+8801752555555",
        email: "nurul.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801752555555",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 6,
        name: "Md. Fazle Hasan",
        designation: "",
        photo: "photos/member-6.jpg",
        presentAddress: "42, Green Road, Farmgate, Dhaka",
        workStation: "Lawyer, Dhaka Senior Court",
        permanentAddress: "Village: Chowgacha, Post: Chowgacha, Thana: Charghat, District: Rajshahi",
        mobile: "+8801762555555",
        email: "fazle.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801762555555",
        college: "Rajshahi College",
        hall: "Musa Khan Hall"
    },
    {
        id: 7,
        name: "Md. Ali Reza",
        designation: "",
        photo: "photos/member-7.jpg",
        presentAddress: "House 15, Sector 7, Uttara, Dhaka",
        workStation: "CEO, Reza Group of Industries",
        permanentAddress: "Village: Sardah, Post: Sardah, Thana: Charghat, District: Rajshahi",
        mobile: "+8801772555555",
        email: "reza.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801772555555",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 8,
        name: "Md. Mahbubur Rahman",
        designation: "",
        photo: "photos/member-8.jpg",
        presentAddress: "Flat 5C, Lake View, Gulshan, Dhaka",
        workStation: "Director, City Bank Limited",
        permanentAddress: "Village: Kunjo, Post: Kunjo, Thana: Puthia, District: Rajshahi",
        mobile: "+8801782555555",
        email: "mahbub.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801782555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 9,
        name: "Md. Julfikar Ali",
        designation: "",
        photo: "photos/member-9.jpg",
        presentAddress: "House 33, Banani, Dhaka",
        workStation: "Journalist, The Daily Star",
        permanentAddress: "Village: Badhai, Post: Badhai, Thana: Gomostapur, District: Naogaon",
        mobile: "+8801792555555",
        email: "julfikar.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801792555555",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 10,
        name: "Md. Rafiqul Islam",
        designation: "",
        photo: "photos/member-10.jpg",
        presentAddress: "Plot 12, Mirpur DOHS, Dhaka",
        workStation: "Engineer, LGED",
        permanentAddress: "Village: Durgaour, Post: Durgapur, Thana: Durgapur, District: Rajshahi",
        mobile: "+8801802555555",
        email: "rafiq.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801802555555",
        college: "Rajshahi College",
        hall: "Musa Khan Hall"
    },
    {
        id: 11,
        name: "Md. Shofiur Rahman",
        designation: "",
        photo: "photos/member-11.jpg",
        presentAddress: "House 8, Lalmatia, Dhaka",
        workStation: "Doctor, Dhaka Medical College Hospital",
        permanentAddress: "Village: Hatkhola, Post: Hatkhola, Thana: Tanore, District: Rajshahi",
        mobile: "+8801812555555",
        email: "shofiur.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801812555555",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 12,
        name: "Md. Azizul Haque",
        designation: "",
        photo: "photos/member-12.jpg",
        presentAddress: "Flat 2B, Baridhara, Dhaka",
        workStation: "Retired Secretary, Ministry of Finance",
        permanentAddress: "Village: Khidirpur, Post: Khidirpur, Thana: Godagari, District: Rajshahi",
        mobile: "+8801822555555",
        email: "azizul.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801822555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 13,
        name: "Md. Ansar Ali",
        designation: "",
        photo: "",
        presentAddress: "House 5, Mirpur 10, Dhaka",
        workStation: "Banker, Islami Bank Bangladesh",
        permanentAddress: "Village: Putikhana, Post: Putikhana, Thana: Paba, District: Rajshahi",
        mobile: "+8801832555555",
        email: "ansar.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801832555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 14,
        name: "Md. Harunur Rashid",
        designation: "",
        photo: "",
        presentAddress: "Flat 4A, Nikunja, Dhaka",
        workStation: "Civil Servant, Bangladesh Civil Service",
        permanentAddress: "Village: Bhelpara, Post: Bhelpara, Thana: Godagari, District: Rajshahi",
        mobile: "+8801842555555",
        email: "harun.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801842555555",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 15,
        name: "Md. Joynal Abedin",
        designation: "",
        photo: "",
        presentAddress: "Plot 20, Jatrabari, Dhaka",
        workStation: "Teacher, Dhaka University",
        permanentAddress: "Village: Katnala, Post: Katnala, Thana: Tanore, District: Rajshahi",
        mobile: "+8801852555555",
        email: "joynal.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801852555555",
        college: "Ananda Mohon College",
        hall: "Musa Khan Hall"
    },
    {
        id: 16,
        name: "Md. Lokman Hossain",
        designation: "",
        photo: "",
        presentAddress: "House 45, Savar, Dhaka",
        workStation: "Medical Doctor, Popular Medical College",
        permanentAddress: "Village: Kachua, Post: Kachua, Thana: Bholahat, District: Rajshahi",
        mobile: "+8801862555555",
        email: "lokman.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801862555555",
        college: "Rajshahi Medical College",
        hall: "Mother Box Hall"
    },
    {
        id: 17,
        name: "Md. Babul Akter",
        designation: "",
        photo: "",
        presentAddress: "Flat 7B, Uttara, Dhaka",
        workStation: "Corporate Executive, BRAC",
        permanentAddress: "Village: Durgapur, Post: Durgapur, Thana: Durgapur, District: Rajshahi",
        mobile: "+8801872555555",
        email: "babul.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801872555555",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 18,
        name: "Md. Ashraful Alam",
        designation: "",
        photo: "",
        presentAddress: "House 12, Bashundhara, Dhaka",
        workStation: "IT Professional, Square Pharmaceuticals",
        permanentAddress: "Village: Saranrai, Post: Saranrai, Thana: Puthia, District: Rajshahi",
        mobile: "+8801882555555",
        email: "ashraful.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801882555555",
        college: "University College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 19,
        name: "Md. Mainuddin",
        designation: "",
        photo: "",
        presentAddress: "Flat 3C, Gulsan 1, Dhaka",
        workStation: "Businessman, Mainuddin Enterprise",
        permanentAddress: "Village: Mohanpur, Post: Mohanpur, Thana: Mohanpur, District: Rajshahi",
        mobile: "+8801892555555",
        email: "mainuddin.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801892555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 20,
        name: "Md. Jalal Uddin",
        designation: "",
        photo: "",
        presentAddress: "House 8, Dhanmondi, Dhaka",
        workStation: "Advocate, Supreme Court",
        permanentAddress: "Village: Gagan, Post: Gagan, Thana: Godagari, District: Rajshahi",
        mobile: "+8801902555555",
        email: "jalal.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801902555555",
        college: "Rajshahi College",
        hall: "Musa Khan Hall"
    },
    {
        id: 21,
        name: "Md. Khorshed Alam",
        designation: "",
        photo: "",
        presentAddress: "Flat 2D, Baridhara, Dhaka",
        workStation: "Professor, BUET",
        permanentAddress: "Village: Bagmara, Post: Bagmara, Thana: Bagmara, District: Rajshahi",
        mobile: "+8801912555555",
        email: "khorshed.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801912555555",
        college: "Bangabandhu College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 22,
        name: "Md. Saidur Rahman",
        designation: "",
        photo: "",
        presentAddress: "Plot 15, Mirpur 6, Dhaka",
        workStation: "Doctor, BIRDEM Hospital",
        permanentAddress: "Village: Badhal, Post: Badhal, Thana: Paba, District: Rajshahi",
        mobile: "+8801922555555",
        email: "saidur.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801922555555",
        college: "Rajshahi Medical College",
        hall: "Mother Box Hall"
    },
    {
        id: 23,
        name: "Md. Nasir Uddin",
        designation: "",
        photo: "",
        presentAddress: "House 33, Mohakhali, Dhaka",
        workStation: "Banker, Dhaka Bank Limited",
        permanentAddress: "Village: Charghat, Post: Charghat, Thana: Charghat, District: Rajshahi",
        mobile: "+8801932555555",
        email: "nasir.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801932555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 24,
        name: "Md. Sazedur Rahman",
        designation: "",
        photo: "",
        presentAddress: "Flat 1B, Shantinagar, Dhaka",
        workStation: "Government Officer, NCTB",
        permanentAddress: "Village: Nungola, Post: Nungola, Thana: Tanore, District: Rajshahi",
        mobile: "+8801942555555",
        email: "sazedur.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801942555555",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 25,
        name: "Md. Abdul Quddus",
        designation: "",
        photo: "",
        presentAddress: "House 7, Gulshan 2, Dhaka",
        workStation: "Chartered Accountant, Quddus & Co",
        permanentAddress: "Village: Sardah, Post: Sardah, Thana: Charghat, District: Rajshahi",
        mobile: "+8801952555555",
        email: "quddus.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801952555555",
        college: "Rajshahi College",
        hall: "Musa Khan Hall"
    },
    {
        id: 26,
        name: "Md. Shaheen Ahmed",
        designation: "",
        photo: "",
        presentAddress: "Flat 6C, Banani, Dhaka",
        workStation: "HR Manager, Grameenphone",
        permanentAddress: "Village: Godagari, Post: Godagari, Thana: Godagari, District: Rajshahi",
        mobile: "+8801962555555",
        email: "shaheen.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801962555555",
        college: "Ananda Mohon College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 27,
        name: "Md. Mosharraf Hossain",
        designation: "",
        photo: "",
        presentAddress: "Plot 9, Adabor, Dhaka",
        workStation: "Businessman, Mosharraf Traders",
        permanentAddress: "Village: Hammad, Post: Hammad, Thana: Paba, District: Rajshahi",
        mobile: "+8801972555555",
        email: "mosharraf.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801972555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 28,
        name: "Md. Fazlur Rahman",
        designation: "",
        photo: "",
        presentAddress: "House 18, Rampura, Dhaka",
        workStation: "Retired Banker",
        permanentAddress: "Village: Bagha, Post: Bagha, Thana: Bagha, District: Rajshahi",
        mobile: "+8801982555555",
        email: "fazlur.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801982555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 29,
        name: "Md. Shafiqul Islam",
        designation: "",
        photo: "",
        presentAddress: "Flat 4B, Badda, Dhaka",
        workStation: "Teacher, Ahsanullah University",
        permanentAddress: "Village: Kumirgram, Post: Kumirgram, Thana: Nachole, District: Chapai Nawabganj",
        mobile: "+8801992555555",
        email: "shafiq.oraa85@gmail.com",
        whatsapp: "https://wa.me/8801992555555",
        college: "University College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 30,
        name: "Md. Mizanur Rahman",
        designation: "",
        photo: "",
        presentAddress: "House 25, Mohammadpur, Dhaka",
        workStation: "Advocate, Dhaka Court",
        permanentAddress: "Village: Nachole, Post: Nachole, Thana: Nachole, District: Chapai Nawabganj",
        mobile: "+8802002555555",
        email: "mizan.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802002555555",
        college: "Rajshahi College",
        hall: "Musa Khan Hall"
    },
    {
        id: 31,
        name: "Md. Zillur Rahman",
        designation: "",
        photo: "",
        presentAddress: "Flat 2A, Paltan, Dhaka",
        workStation: "Professor, Jahangirnagar University",
        permanentAddress: "Village: Gomostapur, Post: Gomostapur, Thana: Gomostapur, District: Naogaon",
        mobile: "+8802012555555",
        email: "zillur.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802012555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 32,
        name: "Md. Nazrul Islam",
        designation: "",
        photo: "",
        presentAddress: "Plot 11, Kafrul, Dhaka",
        workStation: "Businessman, Nazrul Industry",
        permanentAddress: "Village: Badalgazi, Post: Badalgazi, Thana: Paba, District: Rajshahi",
        mobile: "+8802022555555",
        email: "nazrul.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802022555555",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 33,
        name: "Md. Anisur Rahman",
        designation: "",
        photo: "",
        presentAddress: "House 40, Uttara, Dhaka",
        workStation: "Banker, Standard Chartered Bank",
        permanentAddress: "Village: Bagdubi, Post: Bagdubi, Thana: Tanore, District: Rajshahi",
        mobile: "+8802032555555",
        email: "anis.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802032555555",
        college: "Rajshahi College",
        hall: "Musa Khan Hall"
    },
    {
        id: 34,
        name: "Md. Belal Hossain",
        designation: "",
        photo: "",
        presentAddress: "Flat 5D, Shyamoli, Dhaka",
        workStation: "Doctor, Dhaka Medical College",
        permanentAddress: "Village: Putapukhuria, Post: Putapukhuria, Thana: Godagari, District: Rajshahi",
        mobile: "+8802042555555",
        email: "belal.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802042555555",
        college: "Rajshahi Medical College",
        hall: "Mother Box Hall"
    },
    {
        id: 35,
        name: "Md. Ahsan Habib",
        designation: "",
        photo: "",
        presentAddress: "House 22, Baneswar, Rajshahi",
        workStation: "Teacher, Rajshahi University",
        permanentAddress: "Village: Baneswar, Post: Baneswar, Thana: Paba, District: Rajshahi",
        mobile: "+8802052555555",
        email: "ahsan.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802052555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 36,
        name: "Md. Delwar Hossain",
        designation: "",
        photo: "",
        presentAddress: "Flat 3A, New Market, Rajshahi",
        workStation: "Businessman, Delwar Trading",
        permanentAddress: "Village: Durgapur, Post: Durgapur, Thana: Durgapur, District: Rajshahi",
        mobile: "+8802062555555",
        email: "delwar.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802062555555",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 37,
        name: "Md. Abu Taleb",
        designation: "",
        photo: "",
        presentAddress: "House 15, Laxmipur, Rajshahi",
        workStation: "Retired Government Officer",
        permanentAddress: "Village: Kazipara, Post: Kazipara, Thana: Godagari, District: Rajshahi",
        mobile: "+8802072555555",
        email: "taleb.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802072555555",
        college: "Rajshahi College",
        hall: "Musa Khan Hall"
    },
    {
        id: 38,
        name: "Md. Golam Azam",
        designation: "",
        photo: "",
        presentAddress: "Plot 18, Vehari, Rajshahi",
        workStation: "Professor, Rajshahi Medical College",
        permanentAddress: "Village: Vehari, Post: Vehari, Thana: Paba, District: Rajshahi",
        mobile: "+8802082555555",
        email: "azam.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802082555555",
        college: "Rajshahi Medical College",
        hall: "Mother Box Hall"
    },
    {
        id: 39,
        name: "Md. Rezaul Karim",
        designation: "",
        photo: "",
        presentAddress: "House 8, Gopalpur, Rajshahi",
        workStation: "Lawyer, Rajshahi Court",
        permanentAddress: "Village: Gopalpur, Post: Gopalpur, Thana: Tanore, District: Rajshahi",
        mobile: "+8802092555555",
        email: "reza.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802092555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 40,
        name: "Md. Mahfuzur Rahman",
        designation: "",
        photo: "",
        presentAddress: "Flat 2B, Boalia, Rajshahi",
        workStation: "Banker, Rajshahi Krishi Bank",
        permanentAddress: "Village: Charghat, Post: Charghat, Thana: Charghat, District: Rajshahi",
        mobile: "+8802102555555",
        email: "mahfuz.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802102555555",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 41,
        name: "Md. Abdul Momen",
        designation: "",
        photo: "",
        presentAddress: "House 30, Shahabazaar, Rajshahi",
        workStation: "Businessman, Momen Enterprise",
        permanentAddress: "Village: Sardah, Post: Sardah, Thana: Charghat, District: Rajshahi",
        mobile: "+8802112555555",
        email: "momen.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802112555555",
        college: "Rajshahi College",
        hall: "Musa Khan Hall"
    },
    {
        id: 42,
        name: "Md. Enamul Haque",
        designation: "",
        photo: "",
        presentAddress: "Plot 5, Khazanchi Hat, Rajshahi",
        workStation: "Teacher, Govt. Academic School",
        permanentAddress: "Village: Katnala, Post: Katnala, Thana: Tanore, District: Rajshahi",
        mobile: "+8802122555555",
        email: "enam.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802122555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 43,
        name: "Md. Rashedul Hasan",
        designation: "",
        photo: "",
        presentAddress: "Flat 1C, Uposhohor, Rajshahi",
        workStation: "Engineer, LGED Rajshahi",
        permanentAddress: "Village: Hammad, Post: Hammad, Thana: Paba, District: Rajshahi",
        mobile: "+8802132555555",
        email: "rashed.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802132555555",
        college: "University College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 44,
        name: "Md. Shafiqur Rahman",
        designation: "",
        photo: "",
        presentAddress: "House 12, Padabi, Rajshahi",
        workStation: "Medical Doctor, Rajshahi Medical",
        permanentAddress: "Village: Badhal, Post: Badhal, Thana: Paba, District: Rajshahi",
        mobile: "+8802142555555",
        email: "shafiqur.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802142555555",
        college: "Rajshahi Medical College",
        hall: "Mother Box Hall"
    },
    {
        id: 45,
        name: "Md. Jaminur Rahman",
        designation: "",
        photo: "",
        presentAddress: "Flat 4A, Rajshahi",
        workStation: "Banker, Rupali Bank",
        permanentAddress: "Village: Nandigram, Post: Nandigram, Thana: Nachole, District: Chapai Nawabganj",
        mobile: "+8802152555555",
        email: "jamin.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802152555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    },
    {
        id: 46,
        name: "Md. Alauddin",
        designation: "",
        photo: "",
        presentAddress: "House 25, Chandrima, Rajshahi",
        workStation: "Retired Teacher",
        permanentAddress: "Village: Gomostapur, Post: Gomostapur, Thana: Gomostapur, District: Naogaon",
        mobile: "+8802162555555",
        email: "alaud.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802162555555",
        college: "Rajshahi College",
        hall: "Shahid Smriti Hall"
    },
    {
        id: 47,
        name: "Md. Mujibur Rahman",
        designation: "",
        photo: "",
        presentAddress: "Plot 8, Rajshahi",
        workStation: "Businessman, Mujib Trading",
        permanentAddress: "Village: Kunjo, Post: Kunjo, Thana: Puthia, District: Rajshahi",
        mobile: "+8802172555555",
        email: "mujib.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802172555555",
        college: "Rajshahi College",
        hall: "Musa Khan Hall"
    },
    {
        id: 48,
        name: "Md. Shahid Jahan",
        designation: "",
        photo: "",
        presentAddress: "Flat 3B, Rajshahi",
        workStation: "Advocate, High Court Rajshahi",
        permanentAddress: "Village: Tanore, Post: Tanore, Thana: Tanore, District: Rajshahi",
        mobile: "+8802182555555",
        email: "jahan.oraa85@gmail.com",
        whatsapp: "https://wa.me/8802182555555",
        college: "Rajshahi College",
        hall: "Shaheed Badruddoza Hall"
    }
];

// Committee members (filtered from main members array)
const committeeRoles = {
    President: "President",
    Secretary: "Secretary",
    Treasurer: "Treasurer"
};

// State
let currentLang = 'en';
let currentTheme = 'light';
let filteredMembers = [...members];
let currentSlide = 0;
const membersPerSlide = 16;
let slideInterval = null;

// DOM Elements
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const memberSearch = document.getElementById('memberSearch');
const membersGrid = document.getElementById('membersGrid');
const memberModal = document.getElementById('memberModal');
const modalClose = document.querySelector('.modal-close');
const committeeGrid = document.getElementById('committeeGrid');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCommittee();
    renderMembers(members);
    setupEventListeners();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        applyTheme();
    }
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const icon = themeToggle.querySelector('i');
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', currentTheme);
}

// Language Toggle
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'bn' : 'en';
    langToggle.textContent = currentLang === 'en' ? 'EN' : 'বন';
    updateLanguage();
    localStorage.setItem('lang', currentLang);
}

function updateLanguage() {
    document.querySelectorAll('[data-en]').forEach(el => {
        const key = currentLang === 'en' ? 'data-en' : 'data-bn';
        el.innerHTML = el.getAttribute(key);
    });
    
    document.querySelectorAll('[data-placeholder-en]').forEach(el => {
        el.placeholder = el.getAttribute(`data-placeholder-${currentLang}`);
    });
    
    memberSearch.placeholder = memberSearch.getAttribute(`data-placeholder-${currentLang}`);
    
    renderCommittee();
    renderMembers(filteredMembers);
}

// Get photo source with fallback
function getPhotoSource(member) {
    if (member.photo) {
        return member.photo;
    }
    const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23c47d5e' width='100' height='100'/><text x='50' y='50' text-anchor='middle' dy='.35em' fill='white' font-size='40' font-family='serif'>${initials}</text></svg>`;
}

// Check if photo exists (for error handling)
function handlePhotoError(img) {
    const memberId = img.dataset.memberId;
    const member = members.find(m => m.id == memberId);
    if (member) {
        const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2);
        img.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23c47d5e' width='100' height='100'/><text x='50' y='50' text-anchor='middle' dy='.35em' fill='white' font-size='40' font-family='serif'>${initials}</text></svg>`;
    }
    img.onerror = null;
}

// Committee Rendering
function renderCommittee() {
    if (!committeeGrid) return;
    
    committeeGrid.innerHTML = '';
    
    const committeeMembers = members.filter(m => m.designation && committeeRoles[m.designation]);
    
    const roleOrder = ['President', 'Secretary', 'Treasurer'];
    
    roleOrder.forEach(role => {
        const member = committeeMembers.find(m => m.designation === role);
        if (member) {
            const photoSrc = getPhotoSource(member);
            const card = document.createElement('div');
            card.className = 'committee-card';
            card.innerHTML = `
                <div class="committee-avatar">
                    <img src="${photoSrc}" alt="${member.name}" data-member-id="${member.id}" onerror="handlePhotoError(this)">
                </div>
                <div class="committee-role">${currentLang === 'en' ? role : getRoleBangla(role)}</div>
                <h3>${member.name}</h3>
                <p class="work-station">${member.workStation || ''}</p>
                <a href="tel:${member.mobile}" class="click-to-call">
                    <i class="fas fa-phone"></i> ${member.mobile}
                </a>
            `;
            
            card.addEventListener('click', () => openMemberModal(member));
            committeeGrid.appendChild(card);
        }
    });
}

function getRoleBangla(role) {
    const roles = {
        'President': 'সভাপতি',
        'Secretary': 'সম্পাদক',
        'Treasurer': 'কোষাধ্যক্ষ'
    };
    return roles[role] || role;
}

// Member Rendering with Slides
function renderMembers(membersToRender) {
    membersGrid.innerHTML = '';
    
    const regularMembers = membersToRender.filter(m => !m.designation || !committeeRoles[m.designation]);
    const totalSlides = Math.ceil(regularMembers.length / membersPerSlide);
    
    const startIndex = currentSlide * membersPerSlide;
    const endIndex = Math.min(startIndex + membersPerSlide, regularMembers.length);
    const slideMembers = regularMembers.slice(startIndex, endIndex);
    
    slideMembers.forEach((member, index) => {
        const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2);
        const photoSrc = getPhotoSource(member);
        
        const card = document.createElement('div');
        card.className = 'member-card fade-in';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="member-avatar">
                <img src="${photoSrc}" alt="${member.name}" data-member-id="${member.id}" onerror="handlePhotoError(this)">
            </div>
            <h3>${member.name}</h3>
            <p class="work-station">${member.workStation || ''}</p>
            <a href="tel:${member.mobile}" class="click-to-call">
                <i class="fas fa-phone"></i> ${member.mobile}
            </a>
        `;
        
        card.addEventListener('click', () => openMemberModal(member));
        membersGrid.appendChild(card);
    });
    
    updateSlideControls(totalSlides);
}

function updateSlideControls(totalSlides) {
    let controlsContainer = document.getElementById('slideControls');
    if (!controlsContainer && totalSlides > 1) {
        controlsContainer = document.createElement('div');
        controlsContainer.id = 'slideControls';
        controlsContainer.className = 'slide-controls';
        controlsContainer.innerHTML = `
            <button class="slide-nav prev" aria-label="Previous slide"><i class="fas fa-chevron-left"></i></button>
            <div class="slide-dots"></div>
            <button class="slide-nav next" aria-label="Next slide"><i class="fas fa-chevron-right"></i></button>
        `;
        membersGrid.parentElement.appendChild(controlsContainer);
        
        controlsContainer.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
        controlsContainer.querySelector('.next').addEventListener('click', () => changeSlide(1));
    }
    
    if (totalSlides <= 1) {
        if (controlsContainer) controlsContainer.style.display = 'none';
        return;
    }
    
    if (controlsContainer) {
        controlsContainer.style.display = 'flex';
        const dotsContainer = controlsContainer.querySelector('.slide-dots');
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = `slide-dot ${i === currentSlide ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
}

function changeSlide(direction) {
    const regularMembers = filteredMembers.filter(m => !m.designation || !committeeRoles[m.designation]);
    const totalSlides = Math.ceil(regularMembers.length / membersPerSlide);
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    renderMembers(filteredMembers);
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    renderMembers(filteredMembers);
}

function startSlideShow() {
    stopSlideShow();
    slideInterval = setInterval(() => changeSlide(1), 5000);
}

function stopSlideShow() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

function filterMembers(searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredMembers = members.filter(m => 
        m.name.toLowerCase().includes(term) ||
        m.email.toLowerCase().includes(term) ||
        (m.workStation && m.workStation.toLowerCase().includes(term))
    );
    currentSlide = 0;
    renderMembers(filteredMembers);
}

// Member Modal
function openMemberModal(member) {
    const photoSrc = getPhotoSource(member);
    
    document.getElementById('modalPhoto').src = photoSrc;
    document.getElementById('modalPhoto').dataset.memberId = member.id;
    document.getElementById('modalPhoto').onerror = function() { handlePhotoError(this); };
    document.getElementById('modalName').textContent = member.name;
    
    const modalBatch = document.getElementById('modalBatch');
    if (modalBatch) {
        let roleText = '';
        if (member.designation) {
            roleText = currentLang === 'en' ? member.designation : getRoleBangla(member.designation);
        }
        modalBatch.textContent = roleText;
    }
    
    document.getElementById('modalPresentAddress').textContent = member.presentAddress;
    document.getElementById('modalPermanentAddress').textContent = member.permanentAddress;
    document.getElementById('modalWorkStation').textContent = member.workStation || '';
    
    const mobileLink = document.getElementById('modalMobile');
    mobileLink.href = `tel:${member.mobile}`;
    mobileLink.textContent = member.mobile;
    
    const emailLink = document.getElementById('modalEmail');
    emailLink.href = `mailto:${member.email}`;
    emailLink.textContent = member.email;
    
    document.getElementById('modalCollege').textContent = member.college;
    document.getElementById('modalHall').textContent = member.hall;
    
    const socialLinksContainer = document.getElementById('modalSocialLinks');
    socialLinksContainer.innerHTML = '';
    
    if (member.whatsapp) {
        const waLink = document.createElement('a');
        waLink.href = member.whatsapp;
        waLink.target = '_blank';
        waLink.className = 'social-link whatsapp';
        waLink.innerHTML = '<i class="fab fa-whatsapp"></i>';
        waLink.title = 'WhatsApp';
        socialLinksContainer.appendChild(waLink);
    }
    
    if (member.facebook) {
        const fbLink = document.createElement('a');
        fbLink.href = member.facebook;
        fbLink.target = '_blank';
        fbLink.className = 'social-link facebook';
        fbLink.innerHTML = '<i class="fab fa-facebook-f"></i>';
        fbLink.title = 'Facebook';
        socialLinksContainer.appendChild(fbLink);
    }
    
    if (member.linkedin) {
        const liLink = document.createElement('a');
        liLink.href = member.linkedin;
        liLink.target = '_blank';
        liLink.className = 'social-link linkedin';
        liLink.innerHTML = '<i class="fab fa-linkedin-in"></i>';
        liLink.title = 'LinkedIn';
        socialLinksContainer.appendChild(liLink);
    }
    
    if (member.twitter) {
        const twLink = document.createElement('a');
        twLink.href = member.twitter;
        twLink.target = '_blank';
        twLink.className = 'social-link twitter';
        twLink.innerHTML = '<i class="fab fa-twitter"></i>';
        twLink.title = 'Twitter';
        socialLinksContainer.appendChild(twLink);
    }
    
    const bioSection = document.getElementById('modalBioSection');
    const viewBioBtn = document.getElementById('modalViewBio');
    
    if (member.bioFile) {
        bioSection.style.display = 'block';
        if (member.bioFile.endsWith('.pdf')) {
            viewBioBtn.innerHTML = '<i class="fas fa-file-pdf"></i> ' + (currentLang === 'en' ? 'View Bio (PDF)' : 'বায়ো দেখুন (PDF)');
            viewBioBtn.href = member.bioFile;
            viewBioBtn.target = '_blank';
        } else {
            viewBioBtn.innerHTML = '<i class="fas fa-file-alt"></i> ' + (currentLang === 'en' ? 'View Bio' : 'বায়ো দেখুন');
            viewBioBtn.href = member.bioFile;
            viewBioBtn.target = '_blank';
        }
    } else {
        bioSection.style.display = 'none';
    }
    
    memberModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMemberModal() {
    memberModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Event Listeners Setup
function setupEventListeners() {
    langToggle.addEventListener('click', toggleLanguage);
    
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme();
    });
    
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    memberSearch.addEventListener('input', (e) => {
        filterMembers(e.target.value);
    });
    
    modalClose.addEventListener('click', closeMemberModal);
    memberModal.addEventListener('click', (e) => {
        if (e.target === memberModal) closeMemberModal();
    });
    
    document.querySelectorAll('.nav-links a, .footer-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (memberModal.classList.contains('active')) closeMemberModal();
        }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    const portfolioSection = document.querySelector('.portfolio-section');
    if (portfolioSection) {
        portfolioSection.addEventListener('mouseenter', startSlideShow);
        portfolioSection.addEventListener('mouseleave', stopSlideShow);
    }
}

// Initialize Saved Language
const savedLang = localStorage.getItem('lang');
if (savedLang) {
    currentLang = savedLang;
    langToggle.textContent = currentLang === 'en' ? 'EN' : 'বন';
    updateLanguage();
}