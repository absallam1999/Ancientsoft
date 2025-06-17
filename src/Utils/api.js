export async function getAll(type) {
  try {
    const res = await fetch(`/Data/${type}/index.json`);
    if (!res.ok) throw new Error("Fetching error");

    const data = await res.json();
    return data;
  } catch (err) {
    alert(`Error Fetching: ${err}`);
    return null;
  }
}

export async function getGame(id) {
  try {
    const res = await fetch(`/Data/Games/index.json`);
    if (!res.ok) throw new Error("Fetching error");

    const data = await res.json();
    const game = data.Games.find((g) => g.Id === id);

    if (!game) throw new Error(`Game with ID ${id} not Found!`);

    return game;
  } catch (err) {
    alert(`Error Fetching: ${err}`);
    return null;
  }
}

export async function getApp(id) {
  try {
    const res = await fetch(`/Data/Apps/index.json`);
    if (!res.ok) throw new Error("Fetching error");

    const data = await res.json();
    const app = data.Apps.find((a) => a.Id === id);

    if (!app) throw new Error(`App with ID ${id} not found`);

    return app;
  } catch (err) {
    alert(`Error Fetching: ${err}`);
    return null;
  }
}
