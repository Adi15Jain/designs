const categories = [
    {
        id: "agriculture",
        name: "Agriculture",
        programs: [
            {
                id: "agri-1",
                title: "BSc (Hons.) Agriculture (ICAR-Accredited)",
                image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "agri-2",
                title: "MSc - Agronomy",
                image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
    {
        id: "computer-science",
        name: "Computer Science",
        programs: [
            {
                id: "cs-1",
                title: "B.Tech CSE Specialisation in Artificial Intelligence & Blockchain",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "cs-2",
                title: "BCA (Hons / Hons with Research)",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "cs-3",
                title: "BSc (Animation) / (Hons / Hons with Research)",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "cs-4",
                title: "BSc Computer Science (Hons / Hons with Research)",
                image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "cs-5",
                title: "BTech Computer Science & Engineering",
                image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "cs-6",
                title: "BTech CSE in Cloud Technology and Information Security",
                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "cs-7",
                title: "BTech CSE in Cyber Security",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "cs-8",
                title: "BTech CSE in Data Science",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "cs-9",
                title: "BTech CSE- Specialisation in Artificial Intelligence, Machine Learning & Deep Learning",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "cs-10",
                title: "MCA (Master of Computer Applications)",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "cs-11",
                title: "MSc (Master of Science) in Artificial Intelligence (In collaboration with Aivancity, France)",
                image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "cs-12",
                title: "MSc (Master of Science) in Data Science (In collaboration with Aivancity, France)",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "cs-13",
                title: "MTech (Computer Science & Engineering)",
                image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
    {
        id: "dental",
        name: "Dental",
        programs: [
            {
                id: "den-1",
                title: "BDS (Bachelor of Dental Surgery)",
                image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "den-2",
                title: "MDS in Conservation Dentistry & Endodontics",
                image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "den-3",
                title: "MDS in Oral & Maxillofacial Surgery",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "den-4",
                title: "MDS in Oral Maxillofacial Pathology & oral Microbiology",
                image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "den-5",
                title: "MDS in Oral Medicine and Radiology",
                image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "den-6",
                title: "MDS in Orthodontics & Dentofacial Orthopedics",
                image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "den-7",
                title: "MDS in Paedodontics & Preventive Dentistry",
                image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "den-8",
                title: "MDS in Periodontology",
                image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "den-9",
                title: "MDS In Prosthodontics and Crown & Bridge",
                image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "den-10",
                title: "MDS in Public Health Dentistry",
                image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
    {
        id: "education",
        name: "Education",
        programs: [
            {
                id: "edu-1",
                title: "B Ed (Bachelor of Education)",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "edu-2",
                title: "BElEd (Bachelor of Elementary Education)",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "edu-3",
                title: "M Ed (Master of Education)",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
    {
        id: "fine-arts",
        name: "Fine Arts",
        programs: [
            {
                id: "fa-1",
                title: "BFA (Honours / Honours with Research)",
                image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "fa-2",
                title: "Masters of Fine Arts (MFA)",
                image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
    {
        id: "law",
        name: "Law",
        programs: [
            {
                id: "law-1",
                title: "BA LLB (Hons)",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "law-2",
                title: "BBA LLB (Hons)",
                image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "law-3",
                title: "LLM",
                image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
    {
        id: "engineering",
        name: "Engineering",
        programs: [
            {
                id: "eng-1",
                title: "BTech (AICTE Approved) In Civil Engineering",
                image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "eng-2",
                title: "BTech (AICTE Approved) in Computer Science & Engineering",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "eng-3",
                title: "BTech (AICTE Approved) In Electrical Engineering",
                image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "eng-4",
                title: "BTech (AICTE Approved) in Electronics & Communication (EC) Engineering",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "eng-5",
                title: "BTech (AICTE Approved) in Mechanical Engineering",
                image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "eng-6",
                title: "M Tech in Structural and Construction Engineering",
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "eng-7",
                title: "MTech (Master of Technology) in Additive Manufacturing",
                image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "eng-8",
                title: "MTech in Electrical Power and Energy System",
                image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "eng-9",
                title: "MTech in Machine Learning & Data Science",
                image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
    {
        id: "management",
        name: "Management",
        programs: [
            {
                id: "mgm-1",
                title: "B.Com (Honours / Honours with Research)",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "mgm-2",
                title: "BBA (Honours / Honours with Research) in Data Analytics",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "mgm-3",
                title: "BBA (Honours / Honours with Research) in International Business and Entrepreneurship",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "mgm-4",
                title: "BBA (Hons) (Honours / Honours with Research)",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "mgm-5",
                title: "Master of Business Administration (Specialization in Agri-Business Management)",
                image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "mgm-6",
                title: "Master of Business Administration (MBA) with Dual Specialisation",
                image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "mgm-7",
                title: "MBA in Hospital Management (MBA)",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "mgm-8",
                title: "MBA in Logistics and Supply Chain Management",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
    {
        id: "medical",
        name: "Medical",
        programs: [
            {
                id: "med-1",
                title: "BSc Medical in Anatomy",
                image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "med-2",
                title: "BSc Medical in Biochemistry",
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "med-3",
                title: "BSc Medical in Physiology",
                image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "med-4",
                title: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
                image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "med-5",
                title: "MD (Doctor of Medicine) in Anatomy",
                image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-6",
                title: "MD (Doctor of Medicine) in Anesthesiology",
                image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-7",
                title: "MD (Doctor of Medicine) in Biochemistry",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-8",
                title: "MD (Doctor of Medicine) in Community Medicine",
                image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-9",
                title: "MD (Doctor of Medicine) in Dermatology, Venereology and Leprosy",
                image: "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-10",
                title: "MD (Doctor of Medicine) in Forensic Medicine",
                image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-11",
                title: "MD (Doctor of Medicine) in General Medicine",
                image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-12",
                title: "MD (Doctor of Medicine) in Microbiology",
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-13",
                title: "MD (Doctor of Medicine) in Paediatrics",
                image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-14",
                title: "MD (Doctor of Medicine) in Pathology",
                image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-15",
                title: "MD (Doctor of Medicine) in Pharmacology",
                image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-16",
                title: "MD (Doctor of Medicine) in Physiology",
                image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-17",
                title: "MD (Doctor of Medicine) in Psychiatry",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-18",
                title: "MD (Doctor of Medicine) in Radio-Diagnosis/Radiology",
                image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-19",
                title: "MD (Doctor of Medicine) in Respiratory Medicine/TB & Chest",
                image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-20",
                title: "MS (Master of Science) in ENT/Oto-Rhinlaryngology",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-21",
                title: "MS (Master of Science) in General Surgery",
                image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-22",
                title: "MS (Master of Science) in Obstetrics and Gynaecology",
                image: "https://images.unsplash.com/photo-1590611380053-da6447021fbb?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-23",
                title: "MS (Master of Science) in Ophthalomology",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-24",
                title: "MS (Master of Science) in Orthopaedics",
                image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "med-25",
                title: "MSc Medical in Anatomy",
                image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "med-26",
                title: "MSc Medical in Biochemistry",
                image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "med-27",
                title: "MSc Medical in Microbiology",
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "med-28",
                title: "MSc Medical in Pharmacology",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "med-29",
                title: "MSc Medical in Physiology",
                image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
    {
        id: "nursing",
        name: "Nursing",
        programs: [
            {
                id: "nur-1",
                title: "BSc in Nursing",
                image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "nur-2",
                title: "Post Basic BSc in Nursing",
                image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "nur-3",
                title: "MSc in Community Health Nursing",
                image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "nur-4",
                title: "MSc in Medical Surgical Nursing",
                image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "nur-5",
                title: "MSc in Obstetrics & Gynaecology Nursing",
                image: "https://images.unsplash.com/photo-1590611380053-da6447021fbb?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "nur-6",
                title: "MSc in Paediatric Nursing",
                image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "nur-7",
                title: "MSc in Psychiatry Nursing",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
    {
        id: "paramedical",
        name: "Paramedical",
        programs: [
            {
                id: "pmd-1",
                title: "Bachelor of Optometry",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "pmd-2",
                title: "BSc in Forensic Science (Honours / Honours with Research)",
                image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "pmd-3",
                title: "BSc in Medical Lab Techniques",
                image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "pmd-4",
                title: "BSc in Radiological Imaging Techniques",
                image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "pmd-5",
                title: "MSc in Forensic Science",
                image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "pmd-6",
                title: "MSc in Medical Laboratory Techniques",
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "pmd-7",
                title: "MSc in Optometry",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "pmd-8",
                title: "MSc in Radiological Imaging Techniques",
                image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
    {
        id: "pharmacy",
        name: "Pharmacy",
        programs: [
            {
                id: "phr-1",
                title: "BPharm (Bachelor of Pharmacy)",
                image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "phr-2",
                title: "M Pharm (Master of Pharmacy) in Pharmaceutics",
                image: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "phr-3",
                title: "M Pharm (Master of Pharmacy) in Pharmacology",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "phr-4",
                title: "Pharm D (Doctor of Pharmacy)",
                image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
            {
                id: "phr-5",
                title: "Pharm D PB (Post Baccalaureate)",
                image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800",
                level: "Doctorate",
            },
        ],
    },
    {
        id: "physical-education",
        name: "Physical Education",
        programs: [
            {
                id: "ped-1",
                title: "BPEd",
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "ped-2",
                title: "BPES (Honours / Honours with Research)",
                image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "ped-3",
                title: "MPEd",
                image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
    {
        id: "physiotherapy",
        name: "Physiotherapy",
        programs: [
            {
                id: "pt-1",
                title: "Bachelor of Physiotherapy (BPT)",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
                level: "UG",
            },
            {
                id: "pt-2",
                title: "Master of Physiotherapy (MPT) in Cardiopulmonary",
                image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "pt-3",
                title: "Master of Physiotherapy (MPT) in Gynaecology",
                image: "https://images.unsplash.com/photo-1590611380053-da6447021fbb?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "pt-4",
                title: "Master of Physiotherapy (MPT) in Neurosciences",
                image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "pt-5",
                title: "Master of Physiotherapy (MPT) in Orthopaedics",
                image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "pt-6",
                title: "Master of Physiotherapy (MPT) in Paediatrics",
                image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
            {
                id: "pt-7",
                title: "Master of Physiotherapy (MPT) in Sports",
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
                level: "PG",
            },
        ],
    },
];

/* Category thumbnail images for the interactive college grid */
const categoryImages = {
    agriculture:
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400",
    "computer-science":
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400",
    dental: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400",
    education:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400",
    "fine-arts":
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400",
    law: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400",
    engineering:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400",
    management:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
    medical:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=400",
    nursing:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=400",
    paramedical:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
    pharmacy:
        "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400",
    "physical-education":
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400",
    physiotherapy:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
};

categories.forEach(function (cat) {
    cat.image =
        categoryImages[cat.id] ||
        (cat.programs[0] && cat.programs[0].image) ||
        "";
});
