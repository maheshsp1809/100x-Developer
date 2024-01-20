import axios from 'axios';

const API_KEY:string = '9488653d.....' // YOUR CRACKEDDEVS API KEY HERE

const LIMIT:number = 2  // No of jobs to fetch , can remove ?limit from url to get all jobs

export async function crackeddevs() {
  const response = await axios.get(
    `https://api.crackeddevs.com/api/get-jobs?limit=${LIMIT}`,
    {
      headers: {
        'api-key': `${API_KEY}`, // API KEY HERE
      },
    }
  );

  console.log(response.data);  // get the data from the response
  return response.data;
};

crackeddevs() // function call