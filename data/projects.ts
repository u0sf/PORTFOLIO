export interface Project {
  id: number
  title: string
  description: string
  image: string
  tools: string[]
  github?: string
  fullDescription: string
  createdAt: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'DarkStrike (Under Testing and Development)',
    description: 'An ESP32-based security tool for network testing, performing Wi-Fi deauthentication and Evil Twin attacks via an OLED menu interface.',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80',
    tools: ['Arduino IDE', 'C++'],
    github: 'https://github.com/u0sf/DarkStrike',
    fullDescription: 'Performs Wi-Fi scanning, deauthentication, and Evil Twin attacks, navigated through buttons and an OLED menu, built with Arduino IDE on ESP32.',
    createdAt: '2024'
  },
  {
    id: 2,
    title: 'Multi-Game Hub',
    description: 'An ESP32-based handheld device with an OLED screen and buttons that allows playing multiple simple games via a menu interface.',
    image: 'https://thumbs.wokwi.com/projects/421961331486061569/thumbnail.jpg?tile&t=1738672534338',
    tools: ['Arduino IDE', 'C++'],
    github: 'https://github.com/u0sf/Multi-Game-Hub',
    fullDescription: 'Features games like Rock-Paper-Scissors, Guess the Number, and The Catcher. Users navigate via three buttons, with all interaction shown on an OLED display.',
    createdAt: '2024'
  },
  {
    id: 3,
    title: 'Morse Code Decoder',
    description: 'A simple Arduino-based project that lets users input Morse code using two buttons (dot and dash) and displays the decoded characters on an OLED screen.',
    image: 'https://i.ytimg.com/vi/L6gxfX4GrbI/maxresdefault.jpg',
    tools: ['Arduino IDE', 'C++', 'U8g2lib'],
    github: 'https://github.com/u0sf/Morse-Code-Decoder',
    fullDescription: 'Uses Arduino and an OLED display to decode Morse code input via two buttons. It detects timing between inputs to decode letters and displays the result on the screen. Useful for learning Morse code basics.',
    createdAt: '2024'
  },
  {
    id: 4,
    title: 'ViVision',
    description: 'An ESP8266-based system that reads colors using the TCS34725 sensor and displays RGB values and color names on a hosted web interface.',
    image: 'https://th.bing.com/th/id/R.92128bada4b2459a99c5bba92ff4d36a?rik=lQbbpWd6FpJFjg&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f2755000%2fimages%2fo-COLOR-BLIND-GLASSES-facebook.jpg&ehk=FRL%2fJ%2fC9uuLVH0OUj0wRZxdNkOIIvH7xSN9yOBeobfc%3d&risl=&pid=ImgRaw&r=0',
    tools: ['Arduino IDE', 'C++'],
    github: 'https://github.com/u0sf/ViVision',
    fullDescription: 'Reads RGB values from the color sensor, maps them to color names, and serves a live updating webpage for real-time color display.',
    createdAt: '2023'
  },
  {
    id: 5,
    title: 'Bus Safety Project',
    description: 'An Arduino-based system designed to enhance student safety on school buses by detecting seat occupancy and ensuring no students are left behind.',
    image: 'https://th.bing.com/th/id/R.eb19d17bc2aed49beb2216e2f1cf23dc?rik=KYzLcf11xcoQWg&pid=ImgRaw&r=0',
    tools: ['Arduino IDE', 'C++', 'OneSheeld'],
    github: 'https://github.com/u0sf/Bus-Safety-Project',
    fullDescription: 'This project uses sensors placed on each bus seat to detect occupancy. The Arduino microcontroller reads these sensors and lights up LEDs to indicate occupied seats. At the end of the trip, an ultrasonic sensor scans the bus interior to detect if any student is left behind. If a student is detected, an alarm is triggered to notify the driver. This system aims to improve school bus safety by reducing human errors and preventing accidents due to forgotten passengers.',
    createdAt: '2018'
  }
]; 