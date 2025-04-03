# **Flight Search App**

## **Overview**

The Flight Search App is used to demonstrate the functionality of the Flight Search API. The application supports searching flights by Departure Time and Arrival Time and additionally has a "Number of Passengers" field to demonstrate the Co2 calculation

---

## **Technologies**

- **React**: Front end application
- **MUI**: Pre-styled components for handling date and times.
- **GraphQL**: Query language for API interaction.
- **TypeScript**: Ensures type safety and better maintainability of the code.

---

## **Installation**

Follow the steps below to set up and run the API locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/SimTimms/flight-search-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Environment Variables**

Create a .env file in the root directory or set the environment variables on your host instance.

```
VITE_FLIGHT_SEARCH_API = "URL" #The URL for the API
```

4. **Run the Application**
   ```bash
   npm run start
   ```
