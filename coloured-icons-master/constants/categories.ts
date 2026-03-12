import { Category } from "@/interfaces";

const categories: Category[] = [
  { name: "All", description: "All available icons", icon: "✨" },
  { 
    name: "Technology", 
    description: "Programming languages, frameworks, and developer tools",
    icon: "💻",
    subcategories: ["Languages", "Frameworks", "Databases", "DevOps", "Tools"]
  },
  { 
    name: "Social Media", 
    description: "Social platforms and messaging apps",
    icon: "👥"
  },
  { 
    name: "Financial Services", 
    description: "Banks, payment methods, and fintech",
    icon: "💳"
  },
  { 
    name: "Art and Music", 
    description: "Creative tools, music platforms, and design software",
    icon: "🎨"
  },
  { 
    name: "Travel and Tourism", 
    description: "Airlines, hotels, and travel services",
    icon: "✈️"
  },
  { 
    name: "Education", 
    description: "Learning platforms and educational institutions",
    icon: "📚"
  },
  { 
    name: "Food and Beverage", 
    description: "Restaurants, delivery services, and food brands",
    icon: "🍕"
  },
  { 
    name: "Automobile", 
    description: "Car brands and automotive companies",
    icon: "🚗"
  },
  { 
    name: "Animals", 
    description: "Wildlife, pets, and animal illustrations",
    icon: "🦁"
  },
  { 
    name: "Pharmaceuticals", 
    description: "Medications, healthcare, and pharmaceutical brands",
    icon: "💊"
  },
  { 
    name: "Clothing and Apparel", 
    description: "Fashion brands and clothing retailers",
    icon: "👕"
  },
  { 
    name: "Games", 
    description: "Gaming platforms and game publishers",
    icon: "🎮"
  },
  { 
    name: "Instruments", 
    description: "Musical instruments and equipment",
    icon: "🎸"
  },
  { 
    name: "Universities", 
    description: "Higher education institutions worldwide",
    icon: "🎓"
  },
];

export default categories;
