import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Div } from "./styles";
import { InputAnnounce } from "../InputAnnounce/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { announceSchema } from "../../schema/announceSchema";
import { IToyData } from "../../interfaces";
import { ModalAnnounceContext } from "../../context/AnnounceContext";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export function Announce() {
  const { submitAnnounce, announceLoading } = useContext(ModalAnnounceContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IToyData>({
    resolver: yupResolver(announceSchema),
    defaultValues: {
      img: "",
      marks: "",
      toy_name: "",
      category: "",
      price: null,
      description: "",
    },
  });

  function getToy(data: IToyData) {
    const user = localStorage.getItem("@USER: WeeToys");
    if (user != null) {
      const userData = JSON.parse(user);
      const { id } = userData;

      const { category, price, marks, toy_name, img, description } = data;
      const newAnnounce = {
        category: category,
        price: price!,
        marks: marks,
        toy_name: toy_name,
        img: img,
        userId: id,
        description: description,
      };
      submitAnnounce(newAnnounce);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Div>
        <Toaster />
        <p className="announceTitle">Anuncie seu produto, é fácil e rápido!</p>
        <p className="subtitle">
          capriche na foto e na descrição do seu produto
        </p>
        <form onSubmit={handleSubmit(getToy)} noValidate>
          <div className="nameMark">
            <div className="messageDiv">
              <InputAnnounce
                id="image"
                placeholder=""
                labelName="Foto do brinquedo"
                required={false}
                inputType="url"
                width="500px"
                register={register("img")}
              />
              <p>{errors.img?.message}</p>
            </div>
            <InputAnnounce
              id="mark"
              placeholder=""
              labelName="Marca (opcional)"
              required={false}
              inputType="text"
              width="500px"
              register={register("marks")}
            />
          </div>
          <div className="divColl">
            <div className="nameCategoryPriceDiv">
              <div className="messageDiv">
                <InputAnnounce
                  id="name"
                  placeholder=""
                  labelName="Nome"
                  required={false}
                  inputType="text"
                  width="500px"
                  register={register("toy_name")}
                />
                <p>{errors.toy_name?.message}</p>
              </div>
              <div className="categoryPrice">
                <div className="colDiv">
                  <label htmlFor="category">Categoria</label>
                  <select {...register("category")}>
                    <option value=""></option>
                    <option value="Bonecos">Bonecos</option>
                    <option value="Pelúcias">Pelúcias</option>
                    <option value="Carrinhos">Carrinhos</option>
                    <option value="Quebra cabeças">Quebra cabeças</option>
                    <option value="Instrumento musical">
                      Instrumento musical
                    </option>
                    <option value="Outros">Outros</option>
                  </select>
                  <p>{errors.category?.message}</p>
                </div>
                <div className="price">
                  <InputAnnounce
                    id="Price"
                    placeholder="R$"
                    labelName="Preço"
                    required={false}
                    inputType="number"
                    width="230px"
                    register={register("price")}
                  />
                  <p>{errors.price?.message}</p>
                </div>
              </div>
            </div>
            <div className="colDiv">
              <label htmlFor="description">Descrição</label>
              <textarea {...register("description")} />
              <p>{errors.description?.message}</p>
            </div>
          </div>
          <button disabled={announceLoading}>
            {announceLoading ? "Anunciando produto..." : "Anunciar Produto"}
          </button>
        </form>
      </Div>
    </motion.div>
  );
}
