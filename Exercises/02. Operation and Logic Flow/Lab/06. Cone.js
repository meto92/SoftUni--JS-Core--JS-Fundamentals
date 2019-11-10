function calcConeSurfaceAndVolume(radius, height) {
    let slantHeight = Math.sqrt(radius ** 2 + height ** 2);

    let lateralSurfaceArea = Math.PI * radius * slantHeight;
    let baseSurfaceArea = Math.PI * radius ** 2;
    let totalArea = lateralSurfaceArea + baseSurfaceArea;
    let volume = Math.PI * height * radius ** 2 / 3;

    console.log(`volume = ${volume}`);
    console.log(`area = ${totalArea}`)
}