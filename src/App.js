import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { providers, Web3Provider } from 'ethers'
import { InjectedConnector } from '@web3-react/injected-connector'

function getLibrary(provider, connector) {
  return new providers.Web3Provider(provider)
}

function App() {

  const { active, activate, deactivate, account, library, connector, error } = useWeb3React()

  const injected = new InjectedConnector(
    {
      supportedChainIds:[1, 100]
    }
  )

  const connectWallet = async () => {
    try {
      await activate(injected)
    } catch (err) {
      console.error(err)
    }
  }

  const disconnectWallet = async () => {
    try {
      deactivate(injected)
    } catch (err) {
      console.error(err)
    }
  }

	return (
		<div>
    { active ? ( 
    	<div>
    	<span>Connected with <b> { account } </b></span> 
    <button onClick={disconnectWallet}>Disconnect Wallet</button>
    	</div>
    ) : (
    	<div>
    	<span>Not Connected</span>
    <button onClick={connectWallet}>Connect Wallet</button>
    	</div>
    ) }
    </div>
  );
}

export default function () {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <App />
    </Web3ReactProvider>
  );
}
