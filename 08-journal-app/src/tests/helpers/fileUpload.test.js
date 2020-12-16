import cloudinary from 'cloudinary';
import '@testing-library/jest-dom';
import { fileUpload } from '../../helpers/fileUpload';


cloudinary.config({ 
    cloud_name: 'dczryx0yx', 
    api_key: '781233698437186', 
    api_secret: 'Jll6-C0XqCh0Pv-YWvCIEs1z_-8' 
});

describe('Tests over fileUpload', () => {
    
    test('should upload file and return URL', async (done) => {
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();
        
        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        // Delete uploaded img
        const segments = url.split('/');
        const imgId = segments[segments.length - 1].replace('.png', '');
        cloudinary.v2.api.delete_resources(imgId, {}, () => {
            done();
        });
    });

    test('should return null', async () => {
        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
    
});