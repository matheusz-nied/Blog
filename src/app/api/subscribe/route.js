// app/api/subscribe/route.js
import { NextResponse } from 'next/server';
import { db } from '../../../utils/firebaseConfig'; // Caminho para o arquivo de configuração do Firebase
import { collection, addDoc } from 'firebase/firestore';

// Função para tratar requisições POST
export async function POST(req) {
  try {
    // Pega o corpo da requisição
    const { email } = await req.json();

    // Adiciona o email ao Firestore
    const docRef = await addDoc(collection(db, "subscribers"), {
      email: email,
      subscribedAt: new Date()
    });

    console.log("Documento salvo com ID: ", docRef.id);
    return NextResponse.json({ message: 'Assinatura realizada com sucesso!', id: docRef.id });

  } catch (e) {
    console.error("Erro ao adicionar o documento: ", e);
    return NextResponse.json({ error: 'Erro ao adicionar a assinatura.' }, { status: 500 });
  }
}
