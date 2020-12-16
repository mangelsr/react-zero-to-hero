export const fileUpload = async (file) => {
    try {
        const cloudUrl = 'https://api.cloudinary.com/v1_1/dczryx0yx/upload';
        const formData = new FormData();
        formData.append('upload_preset', 'react-journal');
        formData.append('file', file);
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            console.log(resp.json());
            throw await resp.json();
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
};