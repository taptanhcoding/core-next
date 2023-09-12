export enum ColorPalette {
  RUSTY_ORANGE = '#6576FF',
  OCHRE = '#6576FF',
  RUSSET = '#8C4115',
  BUTTER_CUP = '#F2B035',
  BRONZE_ORANGE = '#6576FF',
  CERULEAN = '#366CB2',
  WHITE = '#FFFFFF',
  SNOW = '#FCFCFC',
  GHOST_WHITE = '#F7F7F7',
  GRAY_WHITE = '#F2F2F2',
  LIGHT_GREY = '#E5E5E5',
  SILVER = '#CCCCCC',
  LIGHT_GRAY = '#B3B3B3',
  MEDIUM_GRAY = '#999999',
  DARK_GRAY = '#808080',
  DIM_GRAY = '#666666',
  CHARCOAL = '#4D4D4D',
  BLACK = '#333333',
  OFF_BLACK = '#1A1A1A',
  NEARLY_BLACK = '#0D0D0D',
  VERY_DARK_GRAY = '#080808',
  ABSOLUTE_BLACK = '#030303',
  JET_BLACK = '#000000',
  SLATE_GRAY = '#2C3137',
  CADET_BLUE_GRAY = '#565F6B',
  CADMIUM_GRAY = '#A5ADB8',
  MISTY_GRAY = '#CBCFD5',
  BRONZE = '#BF702A',
  ORANGE_RUST = '#D4843C',
  DARK_TANGERINE = '#AF6726',
  SALMON = '#EAC09C',
  BLOOD_ORANGE = '#BF392A',
  BURNED_ORANGE = '#D44B3C',
  RED_ORANGE = '#AF3426',
  CORAL = '#E9A49D',
  GOLDENROD = '#E5C832',
  MELLOW_YELLOW = '#F4BE5A',
  VIVID_YELLOW = '#F1A923',
  PALE_YELLOW = '#F9DBA4',
  TANGERINE = '#E59F32',
  FOREST_GREEN = '#24A645',
  PALE_GREEN = '#83E49C',
  TURQUOISE = '#5CBFBB',
  BRIGHT_SKY_BLUE = '#37ABBF',
  RICH_BLUE = '#2A94BF',
  COBALT_BLUE = '#3D9CF3',
  SLATE_BLUE = '#3F618C',
  STEEL_BLUE = '#3C6AA6',
  ROYAL_PURPLE = '#5E5CE6',
  DEEP_PURPLE = '#AB51D9',
  SCARLET = '#D92F51',
  SIENNA = '#8C3602',
  DARK_SIENNA = '#732C02',
  PEACH_PUFF = '#E9BF9A',
  FIRE_ENGINE_RED = '#CC3D2D',
  FIREBRICK = '#D34939',
  BLOOD_RED = '#BC3829',
  LIGHT_SALMON_PINK = '#E9A29A',
  AMBER = '#F2B035',
  MEDIUM_ORANGE = '#F3B747',
  ORANGE_PEEL = '#F1A923',
  PALE_GOLDENROD = '#F9DBA4',
  QUICKSILVER = '#A0A1A3',
  SILVER_CHALICE = '#C3C5C7',
  PLATINUM = '#E6E8EB',
  IVORY = '#FAF2EA',
  LINEN = '#F7E8DA',
  PINK_LACE = '#FAECEA',
  PINK_CLOUD = '#F7DDDA',
  ANTIQUE_WHITE = '#FEF8ED',
  CUSTARD = '#FDF1DB',
  SMOKE = '#707C8C',
  RED = '#CC3D2D',
  LIGHT_RED = '#FAECEA',
  ORANGE = '#D4932F',
  LIGHT_ORANGE = '#FBF4EB',
  YELLOW = '#F2B035',
  LIGHT_YELLOW = '#FEF7EB',
  GREEN = '#24A645',
  LIGHT_GREEN = '#EAF6ED',
  TEAL = '#5CBFBB',
  LIGHT_TEAL = '#EFF9F8',
  MINT = '#37ABBF',
  LIGHT_MINT = '#EBF7F9',
  CYAN = '#2A94BF',
  LIGHT_CYAN = '#EAF5F9',
  BLUE = '#0863BF',
  LIGHT_BLUE = '#E7F0F9',
  INDIGO = '#5E5CE6',
  LIGHT_INDIGO = '#EFEFFD',
  PURPLE = '#AB51D9',
  LIGHT_PURPLE = '#F7EEFB',
  PINK = '#D92F51',
  LIGHT_PINK = '#FBEBEE',
  BROWN = '#8C4115',
  LIGHT_BROWN = '#F4ECE8',
}

export enum MainPalette {
  PRIMARY = ColorPalette.OCHRE,
  RUSSET_SECONDARY = ColorPalette.RUSSET,
  BUTTER_CUP_SECONDARY = ColorPalette.BUTTER_CUP,
  CERULEAN_SECONDARY = ColorPalette.CERULEAN,
}

export enum TextPalette {
  LEVEL_1 = ColorPalette.SLATE_GRAY,
  LEVEL_2 = ColorPalette.CADET_BLUE_GRAY,
  LEVEL_3 = ColorPalette.CADMIUM_GRAY,
  LEVEL_4 = ColorPalette.MISTY_GRAY,
  DISABLED = ColorPalette.LIGHT_GRAY,
}

export enum StrokePalette {
  LEVEL_1 = ColorPalette.QUICKSILVER,
  LEVEL_2 = ColorPalette.SILVER_CHALICE,
  LEVEL_3 = ColorPalette.PLATINUM,
}

export enum ButtonStatePalette {
  PRIMARY_STANDARD = ColorPalette.OCHRE,
  PRIMARY_HOVER = ColorPalette.BRONZE_ORANGE,
  PRIMARY_VISITED = ColorPalette.RUSTY_ORANGE,
  PRIMARY_DISABLED = ColorPalette.PEACH_PUFF,
  RED_PRIMARY = ColorPalette.FIRE_ENGINE_RED,
  RED_HOVER = ColorPalette.FIREBRICK,
  RED_VISITED = ColorPalette.BLOOD_RED,
  RED_DISABLED = ColorPalette.LIGHT_SALMON_PINK,
  SECONDARY_PRIMARY = ColorPalette.AMBER,
  SECONDARY_HOVER = ColorPalette.MEDIUM_ORANGE,
  SECONDARY_VISITED = ColorPalette.ORANGE_PEEL,
  SECONDARY_DISABLED = ColorPalette.PALE_GOLDENROD,
  GREEN_STANDARD = ColorPalette.FOREST_GREEN,
  GREEN_DISABLED = ColorPalette.PALE_GREEN,
  LIGHT_YELLOW_HOVER = ColorPalette.IVORY,
  LIGHT_YELLOW_VISITED = ColorPalette.LINEN,
  LIGHT_RED_HOVER = ColorPalette.PINK_LACE,
  LIGHT_RED_VISITED = ColorPalette.PINK_CLOUD,
  SECOND_LIGHT_YELLOW_HOVER = ColorPalette.ANTIQUE_WHITE,
  SECOND_LIGHT_YELLOW_VISITED = ColorPalette.CUSTARD,
  DARK_BLUE = ColorPalette.SMOKE,
}

export enum ShadowPalette {
  SHADOW_2 = '0px 0.15px 0.45px rgba(0, 0, 0, 0.11), 0px 0.8px 1.8px rgba(0, 0, 0, 0.13)',
  SHADOW_4 = '0px 0.3px 0.9px rgba(0, 0, 0, 0.07), 0px 1.6px 3.6px rgba(0, 0, 0, 0.11)',
  SHADOW_8 = '0px 0.6px 1.8px rgba(0, 0, 0, 0.11), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)',
  SHADOW_16 = '0px 1.2px 3.6px rgba(0, 0, 0, 0.11), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13)',
  SHADOW_32 = '0px 2.4px 7.4px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)',
  SHADOW_64 = '0px 4.8px 14.4px rgba(0, 0, 0, 0.18), 0px 25.6px 57.6px rgba(0, 0, 0, 0.22)',
  SIDEBAR = '0px 1.2px 3.6px rgba(0, 0, 0, 0.03), 0px 6.4px 14.4px rgba(0, 0, 0, 0.07)',
}