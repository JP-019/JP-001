import { Router } from "express";

const router = Router();
router.get('/', (req, res) => res.render("index", { title: 'pagina pricipal' }))
router.get('/about', (req, res) => res.render("about", { title: 'pagina secundaria' }))
router.get('/contact', (req, res) => res.render("contact", { title: 'pagina tercera' }))


export default router