import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class ScServiceService {

  provider: Provider = new ethers.providers.InfuraProvider("rinkeby", "82A3lW4ffPGgkB7UmjTP");
  contractAddress: String = "0x2af87dfc1d237d4d38683a43f1483151a1ff51cf";
  contract: Contract = new ethers.Contract(contractAddress, ABI, provider);

  constructor() { };

  async getStatus(): String {
    const status: String = await contract.getStatus();
    console.log(status);
  };

  async getWinner(): String {
    const winner: String = await contract.getWinner();
    console.log(winner);
  };

  getNumberPlayers(): Number {
    const numberPlayers: Number = contract.getNumberPlayers();
    console.log(numberPlayers);
  };
}
