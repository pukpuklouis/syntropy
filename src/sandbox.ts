import { Sandbox } from '@e2b/code-interpreter';

export class SyntropySandbox {
  private sandbox: Sandbox | null = null;

  async create() {
    console.log('🌀 Initializing Syntropy Sandbox (Creating order from chaos)...');
    this.sandbox = await Sandbox.create();
    return this;
  }

  async execute(code: string) {
    if (!this.sandbox) throw new Error('Sandbox not initialized');
    console.log('⚡ Spark is executing...');
    const execution = await this.sandbox.notebook.exec(code);
    return execution;
  }

  async cleanup() {
    if (this.sandbox) {
      console.log('🧹 Collapsing sandbox environment...');
      await this.sandbox.close();
    }
  }
}
