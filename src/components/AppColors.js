// colors.js
export const AppColors = {
  // الخلفيات الأساسية
  background: {
    main: "#0F0F11", // خلفية الصفحة الأساسية
    surface: "#16161A", // بطاقات / Panels
    elevated: "#1C1C21", // مستوى أعلى (مثل Modal أو Drawer)
  },

  // النصوص
  text: {
    primary: "#E7E7EC", // نص واضح
    secondary: "#A0A0A8", // نص وصف
    disabled: "#6F6F76", // نص مخفّض
  },

  // حدود وفواصل
  border: {
    subtle: "#232329",
    strong: "#3A3A42",
  },

  // اللون المميز (Accent)
  accent: {
    main: "#8B5CF6", // بنفسجي راقٍ حديث
    hover: "#7A4CE6",
    active: "#6D3FD6",
  },

  // زر أساسي (Primary Button)
  buttonPrimary: {
    bg: "#8B5CF6",
    bgHover: "#7A4CE6",
    bgActive: "#6D3FD6",
    text: "#FFFFFF",
  },

  // زر ثانوي (Secondary Button)
  buttonSecondary: {
    bg: "#232329",
    bgHover: "#2C2C33",
    bgActive: "#35353D",
    text: "#E7E7EC",
  },

  // عناصر النجاح / الخطأ / التحذير — متناسقة مع الثيم الداكن
  state: {
    success: {
      bg: "#0F2E26",
      border: "#00C2A8",
      text: "#7AFFEC",
    },
    warning: {
      bg: "#2E240F",
      border: "#EFBF53",
      text: "#FFD98A",
    },
    error: {
      bg: "#2E0F11",
      border: "#F25A5A",
      text: "#FF9A9A",
    },
  },

  // ظلال (Shadows) مناسبة للوضع الداكن
  shadow: {
    soft: "0px 4px 10px rgba(0,0,0,0.25)",
    medium: "0px 8px 20px rgba(0,0,0,0.35)",
  },
};
