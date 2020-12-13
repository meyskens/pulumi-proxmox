// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

export class Group extends pulumi.CustomResource {
    /**
     * Get an existing Group resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupState, opts?: pulumi.CustomResourceOptions): Group {
        return new Group(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'proxmox:Permission/group:Group';

    /**
     * Returns true if the given object is an instance of Group.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Group {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Group.__pulumiType;
    }

    /**
     * The access control list
     */
    public readonly acls!: pulumi.Output<outputs.Permission.GroupAcl[] | undefined>;
    /**
     * The group comment
     */
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * The group id
     */
    public readonly groupId!: pulumi.Output<string>;
    /**
     * The group members
     */
    public /*out*/ readonly members!: pulumi.Output<string[]>;

    /**
     * Create a Group resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupArgs | GroupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as GroupState | undefined;
            inputs["acls"] = state ? state.acls : undefined;
            inputs["comment"] = state ? state.comment : undefined;
            inputs["groupId"] = state ? state.groupId : undefined;
            inputs["members"] = state ? state.members : undefined;
        } else {
            const args = argsOrState as GroupArgs | undefined;
            if (!args || args.groupId === undefined) {
                throw new Error("Missing required property 'groupId'");
            }
            inputs["acls"] = args ? args.acls : undefined;
            inputs["comment"] = args ? args.comment : undefined;
            inputs["groupId"] = args ? args.groupId : undefined;
            inputs["members"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Group.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Group resources.
 */
export interface GroupState {
    /**
     * The access control list
     */
    readonly acls?: pulumi.Input<pulumi.Input<inputs.Permission.GroupAcl>[]>;
    /**
     * The group comment
     */
    readonly comment?: pulumi.Input<string>;
    /**
     * The group id
     */
    readonly groupId?: pulumi.Input<string>;
    /**
     * The group members
     */
    readonly members?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    /**
     * The access control list
     */
    readonly acls?: pulumi.Input<pulumi.Input<inputs.Permission.GroupAcl>[]>;
    /**
     * The group comment
     */
    readonly comment?: pulumi.Input<string>;
    /**
     * The group id
     */
    readonly groupId: pulumi.Input<string>;
}
