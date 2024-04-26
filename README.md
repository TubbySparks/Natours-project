# Tour Booking Express App
## Overview

Tour Booking Express App is a robust web application built with Node.js and Express.js for booking tours. It provides APIs for managing users, tours, reviews, and bookings, and also includes views for rendering dynamic web pages.

## Features

- **Middleware Stack:** Includes commonly used middleware for security, logging, rate limiting, and data sanitization.
- **CORS Implementation:** Configured to handle cross-origin resource sharing.
- **Static File Serving:** Set up to serve static files from the 'public' directory.
- **Security Headers:** Utilizes helmet to set security HTTP headers.
- **Content Security Policy:** Implements a content security policy for enhanced security.
- **Webhooks Support:** Includes an example of handling webhooks with the '/webhook-checkout' endpoint.
- **Routing Structure:** Organized routing structure for users, tours, reviews, and bookings.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (or your preferred database)
- **Pug** (view engine)
- Various Middleware:
  - **morgan**
  - **helmet**
  - **express-rate-limit**
  - **express-mongo-sanitize**
  - **xss-clean**
  - **hpp**
  - **cookie-parser**
  - **compression**
  - **cors**

