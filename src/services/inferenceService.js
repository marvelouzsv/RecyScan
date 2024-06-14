import tf from '@tensorflow/tfjs-node';

const predictPlasticWaste = async (model, image) => {
  const tensor = tf.node
    .decodeJpeg(image)
    .resizeNearestNeighbor([224, 224])
    .expandDims()
    .toFloat();
  const prediction = model.predict(tensor);
  const scoreArray = await prediction.data();
  const score = scoreArray[0];
  const threshold = 0.5;
  let label;
  let suggestion;

  if (scoreArray[0] >= threshold) {
    label = 'Botol';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PL-9Q_cqESEgmWhzEXvp0IsL2e0mGFXGRf&si=AiJYLtl4EMxEuPNI">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp1,500.00 - Rp6,100.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp20,000.00 - Rp150,000.00`;
  } else if (scoreArray[1] >= threshold) {
    label = 'Bubble Wrap';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PLFQ7ZUgtJN4Z_LlW6pG24pFm_lBD-Enub&si=RFHClgthi5G7B_7Z">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp1,300.00 - Rp1,800.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp10,000.00 - Rp200,000.00`;
  } else if (scoreArray[2] >= threshold) {
    label = 'Container';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PL-9Q_cqESEgkiPWTeCLiudAWuRoVN3D_i&si=1unr87ogvptHZnJD">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp3,200.00 - Rp3,500.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp25,000.00 - Rp100,000.00`;
  } else if (scoreArray[3] >= threshold) {
    label = 'Cup';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PLFQ7ZUgtJN4a5OWqm-6S6uFMTu0v_fQ8Q&si=UOVW-ED5JIMzn0W1">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp1,800.00 - Rp3,800.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp25,000.00 - Rp135,000.00`;
  } else if (scoreArray[4] >= threshold) {
    label = 'Derigen';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PLFQ7ZUgtJN4ZKbzDZVab2zm2Q-oWFHZlj&si=eo-KXHVjXxzouB2K">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp1,000.00 - Rp2,500.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp10,000.00 - Rp150,000.00`;
  } else if (scoreArray[5] >= threshold) {
    label = 'Ember';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PLFQ7ZUgtJN4Y8VHXdoklYttssKtwzIY0T&si=B87bt--OelS1n5RQ">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp1,000.00 - Rp2,500.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp20,000.00 - Rp300,000.00`;
  } else if (scoreArray[6] >= threshold) {
    label = 'Galon';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PL-9Q_cqESEgm19O7Yx6Y3hsgCTXS8YkDU&si=2eQoEMAZuOyhB-lP">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp600.00 - Rp4,000.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp10,000.00 - Rp150,000.00`;
  } else if (scoreArray[7] >= threshold) {
    label = 'Kantong Plastik';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PLFQ7ZUgtJN4aWwUAp8XlHDQp0gvqAvkn8&si=UvFMnSKIalg5n037">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp240.00 - Rp500.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp10,000.00 - Rp100,000.00`;
  } else if (scoreArray[8] >= threshold) {
    label = 'Mika';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PL-9Q_cqESEgkiPWTeCLiudAWuRoVN3D_i&si=1unr87ogvptHZnJD">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp0.00 - Rp400.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp25,000.00 - Rp100,000.00`;
  } else if (scoreArray[9] >= threshold) {
    label = 'Piring';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PLFQ7ZUgtJN4ZjFpbfPVg82kyMLIRjc7VG&si=Vng--6ydABlQgGuf">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp1,800.00 - Rp3,800.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp15,000.00 - Rp200,000.00`;
  } else if (scoreArray[10] >= threshold) {
    label = 'Plastik Kemasan';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PLFQ7ZUgtJN4b7CGcp4LYMn2T4okChOApL&si=BJ-Meoy0IxkAd-vS">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp0.00 - Rp240.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp10,000.00 - Rp200,000.00`;
  } else if (scoreArray[11] >= threshold) {
    label = 'Sedotan';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PLFQ7ZUgtJN4ZQm-mNcWjIegdnWhmEf6ip&si=D-VDGYHB3za491FF">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp1,000.00 - Rp1,200.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp5,000.00 - Rp150,000.00`;
  } else if (scoreArray[12] >= threshold) {
    label = 'Toples';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PL-9Q_cqESEgnnPCIbxW4ZK8DEPUzdSvEa&si=D-mQXvkBf2-Bgc9H">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp3,200.00 - Rp3,500.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp10,000.00 - Rp150,000.00`;
  } else if (scoreArray[13] >= threshold) {
    label = 'Tube';
    suggestion = `<b>Link Rekomendasi Daur Ulang:</b> <a href="https://youtube.com/playlist?list=PL-9Q_cqESEgmWhzEXvp0IsL2e0mGFXGRf&si=AiJYLtl4EMxEuPNI">Rekomendasi Daur Ulang</a><br>\
    <b>Harga Sebelum Daur Ulang:</b> Rp1,400.00 - Rp6,200.00<br>\
    <b>Harga Setelah Daur Ulang:</b> Rp10,000.00 - Rp150,000.00`;
  } else {
    label = 'Tidak Diketahui!';
    suggestion = '<b>Maaf, tidak ada rekomendasi.</b>\
    Silakan coba lagi dengan gambar yang benar!';
  }
  
  const confidenceScore = score * 100;

  return { confidenceScore, label, suggestion };
};

export default predictPlasticWaste;
