import { logger } from "@/common/logger";
import { config } from "@/config/index";
import { RateLimitRules } from "@/models/rate-limit-rules";
import { Channel } from "@/pubsub/channels";

export class RateLimitUpdatedEvent {
  public static async handleEvent(message: string) {
    await RateLimitRules.forceDataReload();
    logger.info(
      Channel.RateLimitRuleUpdated,
      `Reloaded rate limit rules message=${message} on ${config.railwayStaticUrl}`
    );
  }
}
