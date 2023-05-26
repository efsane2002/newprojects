import * as Yup from 'yup';

export const SitesSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    paragraf: Yup.string().min(4).required("paragraf is required"),
    imageURL: Yup.string().url().required("image is required")
})