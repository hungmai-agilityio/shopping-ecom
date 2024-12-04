
interface APIOptions {
  endpoint: string;
  id?: string;
  data?: Record<string, any>;
  updateMethod?: 'PUT' | 'PATCH';
}

export const fetchData = async ({ endpoint }: APIOptions) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}${endpoint}`);
    const data = await res.json();

    return {
      data,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error: error
    };
  }
};

export const fetchDataId = async ({ endpoint, id }: APIOptions) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}${endpoint}${id}`);
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
};

export const postData = async ({ endpoint, data }: APIOptions) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const item = await res.json();

    return {
      data: item,
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error
    };
  }
};