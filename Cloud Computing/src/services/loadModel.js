import tf from '@tensorflow/tfjs-node';

class L2 {

    static className = 'L2';

    constructor(config) {
       return tf.regularizers.l1l2(config)
    }
}
tf.serialization.registerClass(L2);

const loadModel = async () => tf.loadLayersModel(process.env.MODEL_URL);

export default loadModel;
