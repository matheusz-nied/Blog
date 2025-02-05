"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FaInstagramSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { DiAtom } from "react-icons/di";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false); // Estado para o botão de carregamento
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para o modal
  const modalRef = useRef(null); // Referência para o container do modal
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: data.email })
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Assinatura realizada com sucesso:", result);
        setIsModalOpen(true); // Abre o modal de sucesso
      } else {
        console.error("Erro na assinatura:", result.error);
      }
    } catch (e) {
      console.error("Erro ao fazer a requisição:", e);
    } finally {
      setIsLoading(false); 
    }
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para verificar o clique fora do modal
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  // Adiciona o event listener para o clique fora do modal
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <footer className="mt-32 md:mt-64 pt-10 bg-dark flex flex-col items-center text-light">
      <h3 className="mt-10 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 2+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 mb-10 w-fit sm:min-w-[384px] flex items-stretch bg-dark p-1 sm:p-2 rounded mx04 mb-20"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-[#121214] p-2 mr-2 text-light border- border-solid-1 focus:border-green-500 rounded-sm"
        />

        <button
          type="submit"
          className={`bg-green-500 text-dark cursor-pointer font-medium rounded-sm px-3 sm:px-5 py-1 hover:scale-105 transition-all ease duration-300 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading} // Desabilita o botão enquanto está carregando
        >
          {isLoading ? "Loading..." : "Subscribe"}
        </button>
      </form>

      <hr className="w-4/5 border-t border-solid border-light" />
      <div className="w-full relative font-medium py-4 px-8 flex flex-col gap-4 items-center justify-between">
        <div className="flex items-center">
          <a href="https://matheusznied.vercel.app/" className="inline-block">
            <DiAtom className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/matheusz-nied/"
            className="inline-block"
          >
            <FaLinkedin className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2" />
          </a>
          <a
            href="https://www.instagram.com/matheusz.nied/"
            className="inline-block"
          >
            <FaInstagramSquare className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2" />
          </a>
          <a href="https://github.com/matheusz-nied" className="inline-block">
            <FaGithubSquare className="hover:scale-110 transition-all ease duration-300 w-6 h-6 mr-2" />
          </a>
        </div>
        <span className="text-center">
          &copy;2024 Matheuz.nied. All rights reserved.
        </span>
      </div>

      {/* Modal de Sucesso */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef} // Referência para o container do modal
            className="bg-white p-8 rounded shadow-lg text-center text-black"
          >
            <h2 className="text-2xl font-bold mb-4 ">Inscrito com Sucesso!</h2>
            <p >Obrigado por se inscrever!</p>
            <p className="mb-10 ">Me siga nas redes socias</p>
            <div className="flex justify-center space-x-4 mb-8">
              <a href="https://www.linkedin.com/in/matheusz-nied/" className="text-blue-600">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/matheusz.nied/" className="text-pink-500">
                <FaInstagramSquare className="w-6 h-6" />
              </a>
              <a href="https://github.com/matheusz-nied" className="text-black">
                <FaGithubSquare className="w-6 h-6" />
              </a>
            </div>
            <button
              onClick={closeModal}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
