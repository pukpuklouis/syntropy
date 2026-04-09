import { SyntropySandbox } from './sandbox';

export class Spark {
  private sandbox = new SyntropySandbox();

  async ignite(taskDescription: string, codeToRun: string) {
    console.log(`\n✨ Spark Task: ${taskDescription}`);
    
    try {
      await this.sandbox.create();
      const result = await this.sandbox.execute(codeToRun);
      
      console.log('💎 Pattern Discovered:');
      console.log(result.logs.stdout || result.logs.stderr || 'No pattern found');
      
      if (result.results) {
        console.log('📊 Structured Data:', result.results);
      }
    } catch (error) {
      console.error('❌ Spark failed to ignite:', error);
    } finally {
      await this.sandbox.cleanup();
    }
  }
}
