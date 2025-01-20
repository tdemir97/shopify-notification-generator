# Shopify Order Notification Generator

A web application that allows users to create customizable notifications that look like Shopify order notifications. This tool can be used for personal or entertainment purposes.

## Features

- Create realistic-looking Shopify order notifications
- Customize order details (order ID, product name, amount, etc.)
- Multi-language support (English and Turkish)
- Dark/Light mode support
- Download notifications as PNG images
- Responsive design

## Technologies Used

- React + TypeScript
- Chakra UI for styling
- i18next for internationalization
- html-to-image for image generation

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shopify-notification-generator.git
cd shopify-notification-generator
```

2. Install dependencies:
```bash
cd frontend
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. Fill in the notification details in the form:
   - Order ID (auto-generated, but can be customized)
   - Product Name
   - Store Name
   - Amount
   - Quantity
   - Order Source

2. Click "Generate Notification" to create the notification preview
3. Use the language selector to switch between English and Turkish
4. Toggle between dark and light modes using the theme button
5. Click "Download Image" to save the notification as a PNG file

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Security

- Input validation is implemented to prevent XSS attacks
- No sensitive data is stored or transmitted
- All dependencies are regularly updated to patch security vulnerabilities

## Roadmap

- Add more customization options
- Support for more languages
- Add more notification templates
- Implement image upload for store logos
- Add animation effects to notifications 