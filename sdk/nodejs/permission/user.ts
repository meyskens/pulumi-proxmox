// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

export class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserState, opts?: pulumi.CustomResourceOptions): User {
        return new User(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'proxmox:Permission/user:User';

    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is User {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === User.__pulumiType;
    }

    /**
     * The access control list
     */
    public readonly acls!: pulumi.Output<outputs.Permission.UserAcl[] | undefined>;
    /**
     * The user comment
     */
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * The user's email address
     */
    public readonly email!: pulumi.Output<string | undefined>;
    /**
     * Whether the user account is enabled
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * The user account's expiration date
     */
    public readonly expirationDate!: pulumi.Output<string | undefined>;
    /**
     * The user's first name
     */
    public readonly firstName!: pulumi.Output<string | undefined>;
    /**
     * The user's groups
     */
    public readonly groups!: pulumi.Output<string[] | undefined>;
    /**
     * The user's keys
     */
    public readonly keys!: pulumi.Output<string | undefined>;
    /**
     * The user's last name
     */
    public readonly lastName!: pulumi.Output<string | undefined>;
    /**
     * The user's password
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * The user id
     */
    public readonly userId!: pulumi.Output<string>;

    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserArgs | UserState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as UserState | undefined;
            inputs["acls"] = state ? state.acls : undefined;
            inputs["comment"] = state ? state.comment : undefined;
            inputs["email"] = state ? state.email : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["expirationDate"] = state ? state.expirationDate : undefined;
            inputs["firstName"] = state ? state.firstName : undefined;
            inputs["groups"] = state ? state.groups : undefined;
            inputs["keys"] = state ? state.keys : undefined;
            inputs["lastName"] = state ? state.lastName : undefined;
            inputs["password"] = state ? state.password : undefined;
            inputs["userId"] = state ? state.userId : undefined;
        } else {
            const args = argsOrState as UserArgs | undefined;
            if (!args || args.userId === undefined) {
                throw new Error("Missing required property 'userId'");
            }
            inputs["acls"] = args ? args.acls : undefined;
            inputs["comment"] = args ? args.comment : undefined;
            inputs["email"] = args ? args.email : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["expirationDate"] = args ? args.expirationDate : undefined;
            inputs["firstName"] = args ? args.firstName : undefined;
            inputs["groups"] = args ? args.groups : undefined;
            inputs["keys"] = args ? args.keys : undefined;
            inputs["lastName"] = args ? args.lastName : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["userId"] = args ? args.userId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(User.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering User resources.
 */
export interface UserState {
    /**
     * The access control list
     */
    readonly acls?: pulumi.Input<pulumi.Input<inputs.Permission.UserAcl>[]>;
    /**
     * The user comment
     */
    readonly comment?: pulumi.Input<string>;
    /**
     * The user's email address
     */
    readonly email?: pulumi.Input<string>;
    /**
     * Whether the user account is enabled
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The user account's expiration date
     */
    readonly expirationDate?: pulumi.Input<string>;
    /**
     * The user's first name
     */
    readonly firstName?: pulumi.Input<string>;
    /**
     * The user's groups
     */
    readonly groups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user's keys
     */
    readonly keys?: pulumi.Input<string>;
    /**
     * The user's last name
     */
    readonly lastName?: pulumi.Input<string>;
    /**
     * The user's password
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The user id
     */
    readonly userId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * The access control list
     */
    readonly acls?: pulumi.Input<pulumi.Input<inputs.Permission.UserAcl>[]>;
    /**
     * The user comment
     */
    readonly comment?: pulumi.Input<string>;
    /**
     * The user's email address
     */
    readonly email?: pulumi.Input<string>;
    /**
     * Whether the user account is enabled
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * The user account's expiration date
     */
    readonly expirationDate?: pulumi.Input<string>;
    /**
     * The user's first name
     */
    readonly firstName?: pulumi.Input<string>;
    /**
     * The user's groups
     */
    readonly groups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user's keys
     */
    readonly keys?: pulumi.Input<string>;
    /**
     * The user's last name
     */
    readonly lastName?: pulumi.Input<string>;
    /**
     * The user's password
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The user id
     */
    readonly userId: pulumi.Input<string>;
}
