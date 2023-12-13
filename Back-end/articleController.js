
import Article from "./articleModel.js";

export const getAllArticles= async (req,res,next) =>{
    try{
        const articles = await Article.findAll()
        if(!articles){
            return res.status(404).json({message:'article not found'});
        }
        res.status(200).json({articles:articles});
    }catch(err){
        console.log(err);
    }

}

export const getArticleById = async(req,res,next) =>{
    const {articleId} = req.params;

    try{
        const article = await Article.findByPk(articleId)
        if(!article){
            return res.status(404).json({ message: "article not found" });
        }
        res.status(200).json({article:article});
    }catch(err){
        console.log(err);
    }
}

export const AddArticle = async(req,res,next) =>{
    const img = req.file?.path
    try{
        const article = await Article.create({...req.body,img:img});
        res.status(200).json({article});
    }catch(err){
        console.log(err);
    }
}

export const updateArticle = async (req, res, next) => {
  const img = req.file?.path;
  const {articleId} = req.params;
  try {

    if (img) {
      await Article.update({...req.body,img},{where:{id:articleId}});
      return res.status(200).json({ message: "article updated successfully!" });
    }
    const article = await Article.update({ ...req.body },{where:{id:articleId}});
    res.status(200).json({ message: "article deleted successfully!" });
  } catch (err) {
    console.log(err);
  }
};

export const deleteArticle = async (req,res,next) =>{
    const {articleId}= req.params;
    if(!articleId){
            return res.status(404).json({ message: "article not found" });
    } 
    await Article.destroy({where:{id:articleId}});
    res.status(200).json({message:'article deleted successfully!'})
}