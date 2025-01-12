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

export const postAvatar = async (file: File) => {
  try {
    const formData = new FormData();
    const expirationTime = 43200;
    formData.append('image', file);
    formData.append('expiration', expirationTime.toString());
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AVATAR}?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        method: 'POST',
        body: formData
      }
    );

    if (response.ok) {
      const data = await response.json();

      return data.data.url;
    }
  } catch (error) {
    return error;
  }
};

export const updateData = async ({
  endpoint,
  id,
  data,
  updateMethod = 'PUT'
}: APIOptions) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}${endpoint}/${id}`, {
      method: updateMethod,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error(`Failed to update data: ${res.statusText}`);
    }

    return {
      data: await res.json(),
      error: null
    };
  } catch (error) {
    return {
      data: null,
      error: error
    };
  }
};

export const deleteData = async ({ endpoint, id }: APIOptions) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}${endpoint}/${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Failed to delete data');
  return res.json();
};