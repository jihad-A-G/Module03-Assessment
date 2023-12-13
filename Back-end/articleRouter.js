import express from "express";
import * as ArticleController from './articleController.js'
import upload from "./multer.js";
const router =express.Router();

router.get('/',ArticleController.getAllArticles);
router.get('/:articleId',ArticleController.getArticleById);
router.post('/',upload.single('img'),ArticleController.AddArticle);
router.put('/:articleId',upload.single('img'),ArticleController.updateArticle);
router.delete('/:articleId',ArticleController.deleteArticle);

export default router;