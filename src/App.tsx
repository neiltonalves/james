import React from 'react'
import { Mic, Bot, Zap } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Zap className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-4 font-orbitron">
            James
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Seu assistente de voz inteligente powered by AI. Converse naturalmente e obtenha respostas instantâneas.
          </p>
          
          <div className="flex justify-center items-center space-x-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Mic className="w-5 h-5 text-green-400" />
              <span className="text-white text-sm">Pronto para conversar</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mic className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Conversação Natural</h3>
            <p className="text-gray-300 text-sm">Fale naturalmente como se estivesse conversando com um amigo</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Bot className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">IA Avançada</h3>
            <p className="text-gray-300 text-sm">Powered by tecnologia de ponta para respostas precisas</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Respostas Rápidas</h3>
            <p className="text-gray-300 text-sm">Obtenha informações instantaneamente com alta precisão</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            Clique no ícone de voz abaixo para começar a conversar com James
          </p>
        </div>
      </div>
    </div>
  )
}

export default App