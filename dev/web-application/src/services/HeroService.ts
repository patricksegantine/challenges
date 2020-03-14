import api from '.';

export async function list() {
  const response = await api.get('heroes');
  return response.data;
}


export async function find(id: string) {
  try {
    const response = await api.get(`heroes/${id}`);
    return response.data;
  } catch (err) {
    return err.data;
  }
}

export async function create(user: any) {
  try {
    const response = await api.post('heroes', {
      ...user,
    });
    return response.data;
  } catch (err) {
    return err.data;
  }
}

export async function update(user: any) {
  try {
    const response = await api.put('heroes', {
      ...user,
    });
    return response.data;
  } catch (err) {
    return err.data;
  }
}


export async function remove(id: string) {
  try {
    const response = await api.delete(`heroes/${id}`);
    return response.data;
  } catch (err) {
    return err.data;
  }
}
