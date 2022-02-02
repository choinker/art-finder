import fetch from "cross-fetch";

// TODO: refactor these to export const x = async (...) => { }
export async function login({ email, password }) {
    try {
        const resp = await fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!resp.ok) {
            throw new Error('HTTP status ' + resp.status);
        }

        return resp.json();
    } catch (err) {
        console.error('ERROR calling login: ' + err);
    }
}

export async function searchArtworks({ keyword }) {
    try {
        const resp = await fetch(`/api/homepage/getArtworks/${keyword}`, {
            method: 'GET', 
            headers: { 'Content-Type': 'application/json' },
        });

        if (!resp.ok) {
            throw new Error('HTTP status ' + resp.status);
        }

        return resp.json();
    } catch (err) {
        console.error('ERROR calling searchArtworks: ' + err);
    }
}