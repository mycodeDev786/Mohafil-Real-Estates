import {
  FaBuilding,
  FaHome,
  FaCrown,
  FaStore,
  FaBriefcase,
  FaTree,
} from "react-icons/fa";

const propertyTypesTranslations = {
  en: {
    title: "Browse by Property Type",
    subtitle:
      "Explore our diverse range of properties worldwide. From modern apartments to luxury villas, find the perfect property type for your needs.",
    types: [
      { name: "Apartments", count: "450+ Properties", icon: <FaBuilding /> },
      { name: "Houses", count: "320+ Properties", icon: <FaHome /> },
      { name: "Villas", count: "180+ Properties", icon: <FaCrown /> },
      { name: "Commercial", count: "95+ Properties", icon: <FaStore /> },
      { name: "Offices", count: "75+ Properties", icon: <FaBriefcase /> },
      { name: "Land", count: "60+ Properties", icon: <FaTree /> },
    ],
  },
  ar: {
    title: "تصفح حسب نوع العقار",
    subtitle:
      "استكشف مجموعتنا المتنوعة من العقارات حول العالم. من الشقق الحديثة إلى الفيلات الفاخرة، ابحث عن نوع العقار المناسب لك.",
    types: [
      { name: "شقق", count: "450+ عقار", icon: <FaBuilding /> },
      { name: "منازل", count: "320+ عقار", icon: <FaHome /> },
      { name: "فلل", count: "180+ عقار", icon: <FaCrown /> },
      { name: "تجاري", count: "95+ عقار", icon: <FaStore /> },
      { name: "مكاتب", count: "75+ عقار", icon: <FaBriefcase /> },
      { name: "أراضي", count: "60+ عقار", icon: <FaTree /> },
    ],
  },
};

export default propertyTypesTranslations;
