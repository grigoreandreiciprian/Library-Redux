import {Sequelize} from "sequelize"

export default (sequelize)=>{
    class Book extends Sequelize.Model{};

    Book.init({

        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        }, 

        title:{
            type:Sequelize.STRING,
            allowNull:false,

            validate:{

                notNull:{
                    msg:'Plase provide a value for title'
                },
                notEmpty:{
                    msg:'Plase provide a value for "title',
                },
            },
        },
             
        author:{
            type:Sequelize.STRING,
            allowNull:false,

            validate:{
                notNull:{
                    msg:'Plase provide a value for author',
                },
                notEmpty:{
                    msg:'Plase provide a value for author'
                }

            }
        },

        gendre:{
            type:Sequelize.STRING,
        },

        year:{
            type:Sequelize.INTEGER
        }


    },{
        sequelize,
        timestamp:false,
        createdAt:false,
        updatedAt:false
    });

    return Book;
}