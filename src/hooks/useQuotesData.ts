
import { config } from "@app/config/config";

const useQuotesData = () => {
    const fetchQuotes = async (count: number, filter?: string) => {
      try {
        const response = await fetch(`${config.api_url}/getRandomQuotes?count=${count}&filter=${filter || ''}`);

        if (!response.ok) {
          throw new Error('Failed to fetch quotes');
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`Error fetching quotes, message: ${error}`);
      }
    };
  
    return { fetchQuotes };
  };
  
  export default useQuotesData;